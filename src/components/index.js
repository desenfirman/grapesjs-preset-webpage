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
          resizeable: 0,
          options: [
            { value: 'so', name: 'HTML5 Source' },
            { value: 'yt', name: 'Youtube' },
            { value: 'ytnc', name: 'Youtube (no cookie)' },
          ]
        };
      },
    },
    view: {
      onActive(ev) {
        ev && ev.stopPropagation();
          const {em, model} = this;
          const config = {
            formData: [
              {id: 'provider', type: 'select', name: 'Provider ', defaultValue: "so", options: 
                [
                  { value: 'so', name: 'HTML5 Source' },
                  { value: 'yt', name: 'Youtube' },
                  { value: 'ytnc', name: 'Youtube (no cookie)' },
                ]
              },
              {id: 'src', type: 'text', name: 'URL or Youtube ID', defaultValue: ''}
            ],
            modalTitle: "Specify the video properties"
          }

          modalBoxForm(editor, config, (passed_form_data) => {
            console.log(passed_form_data);
            this.model.set(
              'provider',
              passed_form_data.provider
              )
            switch (passed_form_data.provider){
              case 'yt':
                this.model.set(
                  'videoId',
                  passed_form_data.src
                );
                break;
              case 'ytnc':
                this.model.set(
                  'videoId',
                  passed_form_data.src
                );
                break;
              case 'so':
                this.model.set(
                  'src',
                  passed_form_data.src
                );
                break;
            }
            
            
          });
      }
    }
  });


  editor.Components.getTypes().forEach(compType => {
    let additional_traits = [];
    console.log(compType.id)

    additional_traits = [
        ...additional_traits,
        'alt', 'title',
    ];
    domc.addType(compType.id, {
        model: {
          defaults: {
            traits: [
              ...additional_traits,
              ...domc.getType(compType.id).model.prototype.defaults.traits
            ],
          }
        }
    });
  });

  editor.on('component:selected', model => {
    // console.log('New content', model.get('content'));
    var siblings = document.getElementsByClassName("gjs-sm-sectors")[0]
      .childNodes;

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }


    let type = model.props().type;
    if (type === 'text') {
      showStyleManagerMenu('gjs-sm-typography', siblings);
    }
    else if (type === 'lory-slider' || type === 'map' || type === 'video'){
      showStyleManagerMenu('gjs-traits-manager', siblings);
      // editor.trigger('change:canvasOffset');
      // editor.refresh();
      sleep(1000);
      
    }
    else {
      showStyleManagerMenu('gjs-sm-general', siblings);
    }
    editor.trigger('change:canvasOffset');
    editor.refresh();
  });

  editor.on('component:remove', model => {
    var siblings = document.getElementsByClassName("gjs-sm-sectors")[0]
      .childNodes;
    showStyleManagerMenu('gjs-sm-general', siblings);
    editor.trigger('change:canvasOffset');
    editor.refresh();
  });


};
