
import modalBoxForm from "./misc/modalBoxForm";


const contentDefault = [
          {
            type: 'default',
            resizable: {
              keyWidth: 'flex-basis',
            },
            style: {
              'flex-basis': '30%',
              padding: '5px',
            },
            components: [
              {
                  type: 'image',
                  attributes: {
                    src: "http://placehold.it/150x150/78c5d6/fff/",
                    alt:"Image"
                  },
                  style: {
                    color: 'rgb(217, 131, 166)',
                    'font-size': '45px',
                    width: '100%',
                  },
              },
            ],
          },
          {
            type: 'default',
            resizable: {
              keyWidth: 'flex-basis',
            },
            style: {
              'flex-basis': '70%',
              color: 'rgb(111, 119, 125)',
              'background-color':'rgb(255, 255, 255)',
              'font-size': '13px',
              'line-height': '20px',
              padding: '10px 20px 0px 20px',
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
                style: {
                    'border-radius': '3px',
                    padding: 0,
                    'font-family': 'Open Sans, sans-serif',
                    
                },
                content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>'
              },
            ]
          }
]

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
          resizeable: 1,
          draggable: 1,
          style: {
                'min-height': '150px',
                padding: '5px',
                width: '100%',
                display: 'flex',
                'flex-direction': 'column',
                'align-items': 'stretch'
            },
          components: []
        },

        init(ev){
          ev && ev.stopPropagation();
          this.listenTo(this, 'change:attributes', this.onColumnSizeChange);
        },

        onColumnSizeChange(){
            const row_size = this.getAttributes().rowSize;

            let row_data = []
            for (var i = 0; i < row_size; i++) {
                row_data.push({
                  type: 'defaults',
                  components: {
                    type: 'defaults',
                    style: {
                      height: 'auto',
                      'min-height': '150px',
                      width: '100%',
                      display: 'flex',
                      padding: '5px',
                    },
                    components: contentDefault
                  },
                });
            };
            

            const comp = this.get('components');
            comp.add(
                {
                  type:'defaults',
                  components: row_data
                }
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
            ],
            modalTitle: "How many row of this list items?"
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

