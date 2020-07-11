import ReactDOM from "react-dom";

export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;

  sm.getSectors().reset(
    csm && csm.length
      ? csm
      : [
          {
            id: "general",
            name: "General",
            open: true,
            buildProps: [
              // "background",
              // 'border',
              'border-width',
              'border-style',
              'border-color',
              // 'border-radius',

              // // "float",
              // // "display",
              // // "position",
              // // "top",
              // // "right",
              // // "left",
              // // "bottom",
              "width",
              "height",
              // "max-width",
              // "min-height",
              // 'margin',
              // 'padding'
            ],
            // properties: [
              // {
              //   property: "background-image",
              //   type: 'file'
              // },
              // {
              //   property: "background-color",
              //   type: 'color'
              // },
              // {
              //   property: ""
              // }
            // ],
          },
          {
            id: "background-util",
            name: "Background",
            open: true,
            buildProps: [
              'background-image',
              'background-repeat',
              'background-position',
              'background-attachment',
              'background-size',
              'background-color'
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
            buildProps: [
              'margin', 'padding'
            ]
          },
          {
            id: "typography",
            name: "Typography",
            open: true,
            buildProps: [
              "font-family",
              "font-size",
              "font-weight",
              "letter-spacing",
              "color",
              "line-height",
              "text-align",
              // "text-shadow",
            ],
            properties: [
              {
                property: "text-align",
                list: [
                  { value: "left", className: "fa fa-align-left" },
                  { value: "center", className: "fa fa-align-center" },
                  { value: "right", className: "fa fa-align-right" },
                  { value: "justify", className: "fa fa-align-justify" },
                ],
              },
            ],
          },
          // {
          //   id: "border-style",
          //   name: "Border Style",
          //   open: true,
          //   buildProps: ["border-radius", "border", "border-radius-c"],
          // },
          // {
          //   id: "shadow",
          //   name: "Shadow",
          //   open: true,
          //   buildProps: ["box-shadow"],
          // },
          // {
          //   id: "background",
          //   name: "Background",
          //   open: true,
          //   buildProps: ["background", "background-color"],
          // },
          // {
          //   id: "extra",
          //   name: "Extra",
          //   open: true,
          //   buildProps: ["transform", "transition", "perspective"],
          // },
        ]
  );

  const menu_list = [
    {
      id: "gjs-sm-general",
      title: "General",
    },
    {
      id: "gjs-sm-background-util",
      title: "Background"
    },
    {
      id: "gjs-sm-layout",
      title: "Margin and Padding",
    },
    {
      id: "gjs-sm-typography",
      title: "Font & Typography",
    },
    // {
    //   id: "gjs-sm-border-style",
    //   title: "Border Style",
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

  const showStyleManagerMenu = (active_id, siblings) => {
    siblings.forEach((el) => {
      if (el.id === active_id) {
        el.style.display = "flex";
        document.getElementById(active_id + "-btn").className = 'gjs-four-color active gjs-pn-btn';
        
      } else {
        el.style.display = "none";
        document.getElementById(el.id + "-btn").className = 'gjs-pn-btn gjs-two-color';
      }
    });
  };

  window.addEventListener("load", () => {
    var comp = document.getElementById("style-manager-menu");
    var siblings = document.getElementsByClassName("gjs-sm-sectors")[0]
      .childNodes;

    menu_list.map((curr) => {
      let a = document.createElement("a");
      let linkText = document.createTextNode(curr.title);
      a.appendChild(linkText);
      a.title = curr.title;
      a.id = curr.id + "-btn";
      a.addEventListener(
        "click",
        () => showStyleManagerMenu(curr.id, siblings),
        false
      );
      comp.appendChild(a);
      if (curr.id !== "gjs-sm-general") {
        document.getElementById(curr.id).style.display = "none";
        a.className = 'gjs-pn-btn gjs-two-color';
      } else {
        a.className = "gjs-four-color active gjs-pn-btn";
      }
    });
  });
};
