import customSectionComp from "./customSection";
import gridItemsComp from "./gridItems";
import listItemsComp from "./listItems";


import modalBoxForm from "./misc/modalBoxForm";

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  // ...
  domc.addType("custom-section", customSectionComp(defaultModel, defaultView));
  domc.addType("grid-items", gridItemsComp(defaultModel, defaultView));
  domc.addType("list-items", listItemsComp(defaultModel, defaultView));

  editor.on('component:create', model => { if (model.get('type') === 'video') { editor.runCommand('open-assets', { target: model }); } });
  
  domc.addType("map", {
    view: {
        onActive(ev) {
          ev && ev.stopPropagation();
          const {em, model} = this;
          const config = {
            formData: [
              {id: 'location', type: 'text', name: 'Location ', defaultValue: ""},
            ],
            modalTitle: "You can specify address or coordinate (eg: 47.5951518,-122.3316393)"
          }

          modalBoxForm(editor, config, (passed_form_data) => {

            this.model.set(
              'address',
              passed_form_data.location
            );
            
          });
        },
      },
  });


};
