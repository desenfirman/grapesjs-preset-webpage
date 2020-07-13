
import modalBoxForm from "./misc/modalBoxForm";

let listItem = `<table class="list-item">
      <tr>
        <td class="list-item-cell">
          <table class="list-item-content">
            <tr class="list-item-row">
              <td class="list-cell-left">
                <img class="list-item-image" src="http://placehold.it/150x150/78c5d6/fff/" alt="Image"/>
              </td>
              <td class="list-cell-right">
                <h1 class="card-title">Title here</h1>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;
const contentDefault = [
          {
            type: 'cell',
            style: {
              width:'30%',
              padding: '0',
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
            type: 'cell',
            style: {
              width: '70%',
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
                },
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
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
          tagName: 'table',
          attributes:{
            columnSize: 0,
          },
          style: {
                height: '150px',
                margin: '0 auto 10px auto',
                padding: '5px 5px 5px 5px',
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

            let row_data = []
            for (var i = 0; i < row_size; i++) {
                row_data.push({
                  type: 'row',
                  components: {
                    type: 'cell',
                    style: {
                      height: 'auto',
                      width: '100%',
                      margin: '0 auto 20px auto',
                      padding: '5px',
                    },
                    components: {
                      type: 'table',
                      style: {
                        'background-color':'rgb(255, 255, 255)',
                        'border-radius': '3px',
                        overflow: 'hidden',
                        padding: '0',
                      },
                      components: {
                        type: 'row',
                        components: contentDefault
                      }
                    },
                  },
                 
                });
            };
            

            const comp = this.get('components');
            comp.add(
                {
                  type:'table',
                  components: [
                    {
                      type:'tbody',
                      
                      components: row_data
                    }
                  ]
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

