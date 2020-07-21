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
	        tagName: 'div',
	        resizable:1,
	        draggable: 1,
	        attributes:{
	          columnSize: 0,
	        },
	        style: {
	              height: 'auto',
	              'min-height': '150px',
	              padding: '10px',
	              width: '100%',
	              display: 'flex',
	              'justify-content': 'flex-start',
	              'align-items': 'stretch'
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
	              type: 'default',
	              resizable: true,
	              style: {
	                'flex-basis': `${sect_percentage}%`,
	                padding: '0',
	                margin: '0',
	                'min-height': '75px',
	                'flex-grow': 1,
	                'max-width': '100%',
	                'vertical-align': 'top'
	              },
	              content: `<div></div>`
	            })
	          }
	          

	          const comp = this.get('components');

	          comp.add(
	              td
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

