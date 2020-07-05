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
              "float",
              "display",
              "position",
              "top",
              "right",
              "left",
              "bottom",
              "width",
              "height",
              "max-width",
              "min-height",
            ],
          },
          {
            id: "layout",
            name: "Layout",
            open: true,
            buildProps: [
              "margin",
              "padding",
            ],
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
          {
            id: "decorations",
            name: "Decorations",
            open: true,
            buildProps: [
              "box-shadow",
              "background",
              "background-color",
            ],
          },
          {
            id: "border-decorations",
            name: "Border Decorations",
            open: true,
            buildProps: [
              "border-radius",
              "border",
              "border-radius-c",
            ],
          },
          {
            id: "extra",
            name: "Extra",
            open: true,
            buildProps: ["transform", "transition", "perspective",],
          },
        ]
  );

  const menu_list = [
    {
      id: "gjs-sm-general",
      title: "General",
    },
    {
      id: "gjs-sm-layout",
      title: "Layout",
    },
    {
      id: "gjs-sm-typography",
      title: "Typography",
    },
    {
      id: "gjs-sm-decorations",
      title: "Decorations",
    },
    {
      id: "gjs-sm-border-decorations",
      title: "Border Decorations",
    },
    {
      id: "gjs-sm-extra",
      title: "Extra",
    },
  ];

  const showStyleManagerMenu = (active_id, siblings) => {
    siblings.forEach((el) => {
      if (el.id === active_id) {
        el.style.display = "flex";
        document.getElementById(active_id + '-btn').classList.add('active');
      }
      else{
        el.style.display = "none";
        document.getElementById(el.id + '-btn').classList = [];

      }
    });
    
  };


  window.addEventListener("load", () => {
    var comp = document.getElementById("style-manager-menu");
    var siblings = document.getElementsByClassName('gjs-sm-sectors')[0].childNodes;

    menu_list.map((curr) => {
      let a = document.createElement("a");
      let linkText = document.createTextNode(curr.title);
      a.appendChild(linkText);
      a.title = curr.title;
      a.id = curr.id + "-btn";
      a.addEventListener("click", () => showStyleManagerMenu(curr.id, siblings), false);
      comp.appendChild(a);
      if (curr.id !== "gjs-sm-general") {
        document.getElementById(curr.id).style.display = "none";
      }else{
        a.classList.add('active');
      }
    });
  });

};
