import showStyleManagerMenu from '../styles/showStyleManagerMenu';

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

  // editor.on('component:create', model => { if (model.get('type') === 'video') { editor.runCommand('open-assets', { target: model }); } });
  
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

  domc.addType("video", {
    model: {
      getProviderTrait() {
        return {
          type: 'select',
          label: 'Provider',
          name: 'provider',
          changeProp: 1,
          options: [
            { value: 'so', name: 'HTML5 Source' },
            { value: 'yt', name: 'Youtube' },
            { value: 'ytnc', name: 'Youtube (no cookie)' },
          ]
        };
      },
      
    }
  });

  editor.on('component:selected', model => {
    // console.log('New content', model.get('content'));
    var siblings = document.getElementsByClassName("gjs-sm-sectors")[0]
      .childNodes;
    document.getElementById("gjs-traits-manager-btn").style.display = "none";

    editor.trigger('change:canvasOffset');
        editor.refresh();
    if (model.props().type === 'text') {
      showStyleManagerMenu('gjs-sm-typography', siblings);
    }else if (model.props().type !== 'wrapper') {
      document.getElementById("gjs-traits-manager-btn").textContent = "Component type: " + model.props().type;
      document.getElementById("gjs-traits-manager-btn").style.display = "inline-block";
      if (model.props().type === 'video' || 
          model.props().type === 'image' || 
          model.props().type === 'map' ||
          model.props().type === 'lory-slider'
          ){
        showStyleManagerMenu('gjs-traits-manager', siblings);
      }
    }
  });


};
