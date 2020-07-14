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
              // 'margin',
              // 'padding'
            ],
            properties: [
              {
                property: 'background',
                type: 'composite',
                properties: [
                  {property: 'background-image', name: '<span></span>'},
                  {property: 'background-color', name: ' ', type: 'color'}

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
                    { name: 'Right', property: 'margin-right'},
                    { name: 'Bottom', property: 'margin-bottom'},
                    { name: 'Left', property: 'margin-left'}
                  ],
              },
                {
                  property  : 'padding',
                  properties:[
                    { name: 'Top', property: 'padding-top'},
                    { name: 'Right', property: 'padding-right'},
                    { name: 'Bottom', property: 'padding-bottom'},
                    { name: 'Left', property: 'padding-left'}
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
        ]
  );

  const menu_list = [
    {
      id: "gjs-sm-general",
      title: "General",
    },
    // {
    //   id: "gjs-sm-background-util",
    //   title: "Background"
    // },
    {
      id: "gjs-sm-layout",
      title: "Margin and Padding",
    },
    {
      id: "gjs-sm-typography",
      title: "Font & Typography",
    },
    // {
    //   id: "gjs-traits-manager",
    //   title: "Component Traits",
    // },
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

    menu_list.map((curr) => {
    //   let a = document.createElement("a");
    //   let linkText = document.createTextNode(curr.title);
    //   a.appendChild(linkText);
    //   a.title = curr.title;
    //   a.id = curr.id + "-btn";
    //   a.addEventListener(
    //     "click",
    //     () => {
    //         showStyleManagerMenu(curr.id, siblings);
    //         editor.trigger('change:canvasOffset');
    //         editor.refresh();
    //       },
    //     false
    //   );
      // comp.appendChild(a);
      if (curr.id !== "gjs-sm-general" && curr.id !== "gjs-sm-layout") {
          document.getElementById(curr.id).style.display = "none";
          // a.className = 'gjs-pn-btn gjs-two-color';
      } else {
        // a.className = "gjs-four-color active gjs-pn-btn";
      }
    });

    // let btn_collapse_menubar = document.getElementById("gjs-hide-toolbar-btn");

    // btn_collapse_menubar.addEventListener(
    //   "click",
    //   () => {
    //     const main_container = document.getElementById(`${pfx}main-container`);
    //     if (main_container.classList.contains('collapse')) {
    //       document.getElementById("style-manager-container").style.display = 'block';
    //       btn_collapse_menubar.textContent = 'Hide Toolbar';
    //       main_container.classList.remove('collapse');      
    //     } else {
    //       document.getElementById("style-manager-container").style.display = 'none';
    //       btn_collapse_menubar.textContent = 'Show Toolbar';
    //       main_container.classList.add('collapse');
    //     }
    //     editor.trigger('change:canvasOffset');
    //     editor.refresh();
    //   },
    //   false
    // );

    [...document.getElementsByClassName('gjs-sm-property')].forEach((el) => {
      el.style.display = 'inline-flex'; 
      el.style.width = 'auto'; 


    });

  });


  // adding fonts
  let fontProperty = sm.getProperty('typography', 'font-family');
  let list = fontProperty.get('list');

  fontDefinitions.forEach((font) => {
    list.push(font)
  });
  fontProperty.set('list', list);

  

};
