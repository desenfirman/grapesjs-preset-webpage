
import modalBoxForm from "./misc/modalBoxForm";

const contentDefault = [
    {
      type: 'image',
      attributes: {
        src: "http://placehold.it/250x150/78c5d6/fff/",
        alt:"Image",
      },
      style: {
        width: '100%',
        'line-height':'150px',
        'font-size':'50px',
        color:'rgb(120, 197, 214)',
        'margin-bottom':'15px',
      }
    },
    {
      type: 'defaults',
      components:[
        {
          type: 'defaults',
          style: {
            width: '100%',
            padding: '5px 0',
            'margin-bottom': '10px',
          },
          components: [
            {
              type: 'defaults',
              style: {
                'font-size':'13px',
                color:'rgb(111, 119, 125)',
                padding: '0 10px 10px 10px',
                width:'100%',
                'line-height':'20px',
              },
              components: [
                {
                  type: 'text',
                  tagName: 'h1',
                  style: {
                    'font-size':'25px',
                    'font-weight':'300',
                    color:'rgb(68, 68, 68)',
                    'font-family': 'Open Sans, sans-serif',
                    
                  },
                  content: 'Title Here'
                },
                {
                  type: 'text',
                  tagName: 'p',
                  style: {
                    overflow: 'hidden',
                    'border-radius': '3px',
                    padding: 0,
                    'font-family': 'Open Sans, sans-serif',

                  },
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                },
              ]
            }
          ]
        }
      ]
    }
  ];

export default (defaultModel, defaultView) => {
  return {
      isComponent(el) {
        let result = "";

        if (el.tagName == "table") {
          result = { type: "table" };
        }

        return result;
      },

      model: {
        defaults: {
          ...defaultModel.prototype.defaults,
          tagName: 'defaults',
          attributes:{
            columnSize: 0,
          },
          resizable: 1,
          draggable: 1,
          style: {
                height: '150px',
                width: '100%'
            },
          components: []
        },

        init(ev){
          ev && ev.stopPropagation();

          this.listenTo(this, 'change:attributes', this.onColumnSizeChange);
        },

        onColumnSizeChange(){
            const row_size = this.getAttributes().rowSize;
            const col_size = this.getAttributes().columnSize;
            const col_width_percentage = 100/col_size + "";

            let tbody_data = []
            for (var i = 0; i < row_size; i++) {
              let row_data = []
              for (let i = 0; i < col_size; i++) {
                row_data.push({
                  type: 'defaults',
                  resizable: {
                    keyWidth: 'flex-basis'
                  },
                  style: {
                    'flex-basis': `${col_width_percentage}%;`,
                    'min-height': '150px',
                    margin: '5px',
                    'vertical-align': 'top',
                    'background-color':'rgb(255, 255, 255)',
                  },
                  components: contentDefault
                })
              }
              tbody_data.push({
                type: 'defaults',
                style: {
                  padding: '5px',
                  width: '100%',
                  'min-height': '150px',
                  display: 'flex',
                },
                components: row_data
              })
            }
            

            const comp = this.get('components');

            comp.add(
                tbody_data
            );
        }
      },

      view: {
        defaults: {
          ...defaultView.prototype.defaults,
        },

        onActive(ev) {
          // console.log(this);
          ev && ev.stopPropagation();
          const {em, model} = this;

          const config = {
            formData: [
              {id: 'rowSize', type: 'number', name: 'Row Size', defaultValue: 1},
              {id: 'columnSize', type: 'number', name: 'Column Size', defaultValue: 1},
            ],
            modalTitle: "How many row and column of this grid items?"

          }

          modalBoxForm(editor, config, (passed_form_data) => {
            this.model.setAttributes({
              rowSize: passed_form_data.rowSize,
              columnSize: passed_form_data.columnSize
            });
            
          });
        },

        noDrag(ev) {
          ev.preventDefault();
          return false;
        },
      },
  }

}

