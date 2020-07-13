import modalBoxForm from "./misc/modalBoxForm";


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
	          const sect_size = this.getAttributes().columnSize;
	          const sect_percentage = 100/sect_size + "";

	          let td = [];
	          for (let i = 0; i < sect_size; i++) {
	            td.push({
	              type: 'cell',
	              resizable: true,
	              style: {
	                width: `${sect_percentage}%;`,
	                'min-width': `${sect_percentage}% !important;`,
	                padding: '0',
	                margin: '0',
	                'vertical-align': 'top'
	              },
	              content: `<div></div>`
	            })
	          }
	          

	          const comp = this.get('components');

	          comp.add(
	              {
	                type:'tbody',
	                components: [
	                  {
	                    type: 'row',
	                    components: td
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
	        		{id: 'columnSize', type: 'number', name: 'Column Size', defaultValue: 1},
	        	],
            	modalTitle: "How many column on this section you would divide?"
	        }

	        modalBoxForm(editor, config, (passed_form_data) => {

	          this.model.setAttributes({
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

