import showStyleManagerMenu from './showStyleManagerMenu';

import fontDefinitions from './fontDefinitions';

const svgIcon = {
  topLeftBorder: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M490.9568 883.2h-68.266667a21.333333 21.333333 0 1 0 0 42.666667h68.266667a21.333333 21.333333 0 1 0 0-42.666667zM896 200.533333a21.333333 21.333333 0 0 0-21.333333 21.333334v68.266666a21.333333 21.333333 0 1 0 42.666666 0v-68.266666a21.333333 21.333333 0 0 0-21.333333-21.333334zM337.3568 883.2h-68.266667a21.333333 21.333333 0 1 0 0 42.666667h68.266667a21.333333 21.333333 0 1 0 0-42.666667zM191.112533 884.5824c0.5376-3.234133 0.887467-6.536533 0.887467-9.915733V621.832533C192 388.8384 396.168533 192 637.832533 192H874.666667a59.733333 59.733333 0 1 0 0-119.466667H637.832533c-147.874133 0-288.503467 56.6272-395.9808 159.4624C132.667733 336.4608 72.533333 474.9056 72.533333 621.832533V874.666667a59.733333 59.733333 0 0 0 59.733334 59.733333 59.332267 59.332267 0 0 0 30.651733-8.533333h20.829867a21.333333 21.333333 0 0 0 21.333333-21.333334 21.265067 21.265067 0 0 0-13.969067-19.950933zM798.1568 883.2h-68.266667a21.333333 21.333333 0 1 0 0 42.666667h68.266667a21.333333 21.333333 0 1 0 0-42.666667zM644.5568 883.2h-68.266667a21.333333 21.333333 0 1 0 0 42.666667h68.266667a21.333333 21.333333 0 1 0 0-42.666667zM896 814.933333a21.333333 21.333333 0 0 0-21.333333 21.333334v48.8448a21.341867 21.341867 0 0 0 8.823466 40.7552H896a21.333333 21.333333 0 0 0 21.333333-21.333334v-68.266666a21.333333 21.333333 0 0 0-21.333333-21.333334zM896 354.133333a21.333333 21.333333 0 0 0-21.333333 21.333334v68.266666a21.333333 21.333333 0 1 0 42.666666 0v-68.266666a21.333333 21.333333 0 0 0-21.333333-21.333334zM896 507.733333a21.333333 21.333333 0 0 0-21.333333 21.333334v68.266666a21.333333 21.333333 0 1 0 42.666666 0v-68.266666a21.333333 21.333333 0 0 0-21.333333-21.333334zM896 661.333333a21.333333 21.333333 0 0 0-21.333333 21.333334v68.266666a21.333333 21.333333 0 1 0 42.666666 0v-68.266666a21.333333 21.333333 0 0 0-21.333333-21.333334z"/></svg>',
  topRightBorder: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M123.733333 490.9568v-68.266667a21.333333 21.333333 0 1 0-42.666666 0v68.266667a21.333333 21.333333 0 1 0 42.666666 0zM806.4 896a21.333333 21.333333 0 0 0-21.333333-21.333333h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 0 0 21.333333-21.333333zM123.733333 337.3568v-68.266667a21.333333 21.333333 0 1 0-42.666666 0v68.266667a21.333333 21.333333 0 1 0 42.666666 0zM122.350933 191.112533c3.234133 0.5376 6.536533 0.887467 9.915734 0.887467h252.834133C618.094933 192 814.933333 396.168533 814.933333 637.832533V874.666667a59.733333 59.733333 0 1 0 119.466667 0V637.832533c0-147.874133-56.635733-288.503467-159.4624-395.9808C670.472533 132.667733 532.036267 72.533333 385.1008 72.533333H132.266667a59.733333 59.733333 0 0 0-59.733334 59.733334c0 11.221333 3.1488 21.6832 8.533334 30.651733v20.829867a21.333333 21.333333 0 0 0 21.333333 21.333333 21.265067 21.265067 0 0 0 19.950933-13.969067zM123.733333 798.1568v-68.266667a21.333333 21.333333 0 1 0-42.666666 0v68.266667a21.333333 21.333333 0 1 0 42.666666 0zM123.733333 644.5568v-68.266667a21.333333 21.333333 0 1 0-42.666666 0v68.266667a21.333333 21.333333 0 1 0 42.666666 0zM192 896a21.333333 21.333333 0 0 0-21.333333-21.333333h-48.8448a21.341867 21.341867 0 0 0-40.7552 8.823466V896a21.333333 21.333333 0 0 0 21.333333 21.333333h68.266667a21.333333 21.333333 0 0 0 21.333333-21.333333zM652.8 896a21.333333 21.333333 0 0 0-21.333333-21.333333h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 0 0 21.333333-21.333333zM499.2 896a21.333333 21.333333 0 0 0-21.333333-21.333333h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 0 0 21.333333-21.333333zM345.6 896a21.333333 21.333333 0 0 0-21.333333-21.333333h-68.266667a21.333333 21.333333 0 1 0 0 42.666666h68.266667a21.333333 21.333333 0 0 0 21.333333-21.333333z"/></svg>',
  bottomLeftBorder: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M883.217067 515.985067v68.266666a21.333333 21.333333 0 0 0 42.666666 0.008534v-68.2752a21.333333 21.333333 0 1 0-42.666666 0zM200.541867 110.933333a21.333333 21.333333 0 0 0 21.333333 21.333334h68.266667a21.333333 21.333333 0 1 0 0-42.666667h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333zM883.217067 669.585067v68.2752a21.333333 21.333333 0 1 0 42.666666 0v-68.2752a21.333333 21.333333 0 1 0-42.666666 0zM884.590933 815.829333a60.3392 60.3392 0 0 0-9.915733-0.887466L621.841067 814.933333c-232.9856 0-429.832533-204.168533-429.832534-445.832533V132.266667a59.733333 59.733333 0 1 0-119.466666 0v236.834133c0 147.874133 56.635733 288.494933 159.4624 395.9808C336.469333 874.2656 474.914133 934.4 621.841067 934.4h252.834133a59.733333 59.733333 0 0 0 59.733333-59.733333c0-11.2128-3.1488-21.674667-8.533333-30.6432v-20.829867a21.333333 21.333333 0 0 0-21.333333-21.333333 21.2736 21.2736 0 0 0-19.950934 13.969066zM883.217067 208.776533v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 1 0-42.666666 0zM883.217067 362.376533v68.266667a21.333333 21.333333 0 1 0 42.666666 0v-68.266667a21.333333 21.333333 0 1 0-42.666666 0zM814.9504 110.933333a21.333333 21.333333 0 0 0 21.333333 21.333334h48.836267a21.333333 21.333333 0 0 0 40.763733-8.823467V110.933333a21.333333 21.333333 0 0 0-21.333333-21.333333h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333zM354.141867 110.933333a21.333333 21.333333 0 0 0 21.333333 21.333334h68.266667a21.333333 21.333333 0 1 0 0-42.666667h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333zM507.741867 110.933333a21.333333 21.333333 0 0 0 21.333333 21.333334h68.266667a21.333333 21.333333 0 1 0 0-42.666667h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333zM661.3504 110.933333a21.333333 21.333333 0 0 0 21.333333 21.333334h68.266667a21.333333 21.333333 0 1 0 0-42.666667h-68.266667a21.333333 21.333333 0 0 0-21.333333 21.333333z"/></svg>',
  bottomRightBorder: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M515.968 123.733333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 1 0 0 42.666666zM110.9248 806.4a21.333333 21.333333 0 0 0 21.333333-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666666 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM669.576533 123.733333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 1 0 0 42.666666zM815.8208 122.350933A60.3392 60.3392 0 0 0 814.933333 132.266667v252.834133C814.933333 618.0864 610.7648 814.933333 369.1008 814.933333H132.258133a59.733333 59.733333 0 1 0 0 119.466667h236.834134c147.874133 0 288.503467-56.635733 395.9808-159.4624 109.184-104.465067 169.3184-242.909867 169.3184-389.8368V132.266667a59.733333 59.733333 0 0 0-59.733334-59.733334 59.357867 59.357867 0 0 0-30.651733 8.533334h-20.829867a21.333333 21.333333 0 0 0-21.333333 21.333333 21.248 21.248 0 0 0 13.9776 19.950933zM208.768 123.733333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 1 0 0 42.666666zM362.368 123.733333h68.266667a21.333333 21.333333 0 1 0 0-42.666666h-68.266667a21.333333 21.333333 0 1 0 0 42.666666zM110.9248 192a21.333333 21.333333 0 0 0 21.333333-21.333333v-48.8448A21.341867 21.341867 0 0 0 123.434667 81.066667h-12.509867a21.333333 21.333333 0 0 0-21.333333 21.333333v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM110.9248 652.8a21.333333 21.333333 0 0 0 21.333333-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666666 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM110.9248 499.2a21.333333 21.333333 0 0 0 21.333333-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666666 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333zM110.9248 345.6a21.333333 21.333333 0 0 0 21.333333-21.333333v-68.266667a21.333333 21.333333 0 1 0-42.666666 0v68.266667a21.333333 21.333333 0 0 0 21.333333 21.333333z"/></svg>'
}

export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;
  const pfx = editor.getConfig("stylePrefix")
  const modal = editor.Modal;



  sm.getSectors().reset(
    csm && csm.length
      ? csm
      : [
          {
            id: "general",
            name: "General",
            open: true,
            buildProps: [
              'background',
              'border',
              'border-radius',
              // "float",
              // "bottom",
              // "width",
              // "height",
              'dimensions',
              // "max-width",
              // "min-height",
            ],
            properties: [
              {
                property: 'background',
                type: 'composite',
                properties: [
                  {property: 'background-image', name: '<span></span>'},
                  {property: 'background-color', name: ' ', type: 'color', defaults: '#ffffff'}

                ]
              },
              {
                property: 'border',
                type: 'composite',
                properties: [
                  {property: 'border-width', name: ' '},
                  {property: 'border-style', name: ' '},
                  {property: 'border-color', name: ' '}
                ]
              },
              {
                  property: 'border-radius',
                  type: 'composite',
                  properties:[
                    { name: svgIcon.topLeftBorder, property: 'border-top-left-radius'},
                    { name: svgIcon.topRightBorder, property: 'border-top-right-radius'},
                    { name: svgIcon.bottomLeftBorder, property: 'border-bottom-left-radius'},
                    { name: svgIcon.bottomRightBorder, property: 'border-bottom-right-radius'}
                  ],
              },
              {
                property: "dimensions",
                type: 'composite',
                properties: [
                  {property: 'width', name: 'Width', type: 'integer', units: ['%', 'px'], unit: '%'},
                  {property: 'height', name: 'Height', type: 'integer', units: ['%', 'px'], unit: '%'},
                ]
              },
          ]
          },
          {
            id: "layout",
            name: "Margin and Padding",
            open: true,
            // buildProps: [
            //   "margin-top", "margin-bottom", "margin-left", "margin-right",
            //   "padding-top", "padding-bottom", "padding-left", "padding-right"
            //   ],
            buildProps: [ 'margin', 'padding'],
            properties:[
              {
                  property: 'margin',
                  properties:[
                    { name: 'Top', property: 'margin-top' },
                    { name: 'Bottom', property: 'margin-bottom'},
                    { name: 'Left', property: 'margin-left'},
                    { name: 'Right', property: 'margin-right'},
                  ],
              },
                {
                  property  : 'padding',
                  properties:[
                    { name: 'Top', property: 'padding-top'},
                    { name: 'Bottom', property: 'padding-bottom'},
                    { name: 'Left', property: 'padding-left'},
                    { name: 'Right', property: 'padding-right'},
                  ],
                }
              ],
          },
          {
            id: "typography",
            name: "Typography",
            open: true,
            buildProps: [
              "font-family",
              "font-size",
              "text-align",
              "font-weight",
              "letter-spacing",
              "line-height",
            ],
            properties: [

              {
                property: "text-align",
                name: ' ',
                list: [
                  { value: "left", className: "fa fa-align-left" },
                  { value: "center", className: "fa fa-align-center" },
                  { value: "right", className: "fa fa-align-right" },
                  { value: "justify", className: "fa fa-align-justify" },
                ],
              },

            ],
          },
          {
            id: 'button-toogle',
            name: 'Button Toogle',
            buildProps: [
              'margin-padding-button',
              'trait-button',
            ]
          }
        ]
  );

  const menu_list = [
    {
      id: "gjs-sm-general",
      title: "General",
    },
    {
      id: "gjs-sm-layout",
      title: "Margin and Padding",
    },
    {
      id: "gjs-sm-typography",
      title: "Font & Typography",
    },
    {
      id: "gjs-sm-button-toogle",
      title: "Button Toogle",
    },
    // {
    //   id: "gjs-sm-shadow",
    //   title: "Shadow",
    // },
    // {
    //   id: "gjs-sm-background",
    //   title: "Background",
    // },
    // {
    //   id: "gjs-sm-extra",
    //   title: "Extra",
    // },
  ];


  window.addEventListener("load", () => {
    var comp = document.getElementById("style-manager-menu");
    var siblings = document.getElementsByClassName("gjs-sm-sectors")[0]
      .childNodes;

    
    
    const margin_padding_btn = document.getElementById('gjs-sm-margin-padding-button');
    margin_padding_btn.innerHTML = '<button class="gjs-sm-btn">Margin & Padding</button>';
    const trait_btn = document.getElementById('gjs-sm-trait-button');
    trait_btn.innerHTML = '<button class="gjs-sm-btn">Trait</button>';
    const layout_style_manager = document.getElementById('gjs-sm-layout');
    layout_style_manager.removeChild(layout_style_manager.getElementsByClassName('gjs-sm-title')[0]);
    layout_style_manager.style.display = 'none';
    layout_style_manager.style.borderBottom = 'none';


    trait_btn.onclick = (e) => {
      const alt_el = document.querySelector(".gjs-label[title='Alt']").parentNode.parentNode.parentNode;
      const title_el = document.querySelector(".gjs-label[title='Title']").parentNode.parentNode.parentNode;


      const container = document.createElement('div');
      container.className = 'gjs-sm-properties';
      container.appendChild(alt_el);
      container.appendChild(title_el);
      modal.setTitle("Trait Options");
      container.style.display = 'block';

      
      modal.setContent(container);
      modal.open();


      alt_el.style.display = 'block';
      title_el.style.display = 'block';
      



    }    


    margin_padding_btn.onclick = (e) => {
      modal.setTitle("Margin & Padding Options");
      layout_style_manager.style.display = 'block';
      [...layout_style_manager.getElementsByClassName('gjs-sm-property')].forEach((el) => {
        el.style.display = 'block';
        el.style.width = '50%';
        el.getElementsByClassName('gjs-field')[0].style.width = '100%';

      });
      [...layout_style_manager.querySelectorAll('.gjs-sm-composite.gjs-sm-property')].forEach((el) => {
        el.style.width = '90%';
        el.style.margin = 'auto';
      })
      
      modal.setContent(layout_style_manager);
      modal.open();
    }

    menu_list.map((curr) => {
      if (curr.id !== "gjs-sm-general" && curr.id !== "gjs-sm-button-toogle") {
          document.getElementById(curr.id).style.display = "none";
      } else {
          document.getElementById(curr.id).style.display = "inline-block";

      }
    });

    const style_manager_container = document.getElementById('style-manager-container');
    style_manager_container.appendChild(style_manager_container.firstElementChild);
    style_manager_container.firstElementChild.style.display = 'none';

    [...document.getElementsByClassName('gjs-sm-property')].forEach((el) => {
      el.style.display = 'inline-flex'; 
      el.style.width = 'auto'; 
    });

    // adding fonts
    const fontProperty = sm.getProperty('typography', 'font-family');
    fontProperty.set('list', []);

    fontDefinitions.forEach((font) => {
      fontProperty.addOption(font)
    });
    fontProperty.set('defaults', 'Open Sans, sans-serif');

    const traits_container = document.getElementsByClassName('gjs-trt-traits')[0];
    traits_container.addEventListener("DOMNodeInserted", (e) => {
      console.log("hi")
      document.querySelector(".gjs-label[title='Alt']").parentNode.parentNode.parentNode.style.display = 'none';
      document.querySelector(".gjs-label[title='Title']").parentNode.parentNode.parentNode.style.display = 'none';
    });

  });



  

};
