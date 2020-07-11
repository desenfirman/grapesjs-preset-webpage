// import 'style.scss';

export default (editor, config) => {
  const bm = editor.BlockManager;
  let tableStyleStr = "";
  let cellStyleStr = "";
  const toAdd = (name) => config.blocks.indexOf(name) >= 0;
  const opt = config;
  let tableStyle = opt.tableStyle || {};
  let cellStyle = opt.cellStyle || {};
  for (let prop in tableStyle) {
    tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
  }
  for (let prop in cellStyle) {
    cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
  }

  bm.add("sect100", {
    label: 'Section',
    category: "Basic",
    attributes: { class: "gjs-fonts gjs-f-b1" },
    content: {
      type: 'custom-section',
      
      activeOnRender: 1,
    },
    activate: true,
  });
  bm.add("text", {
    label: "Text",
    category: "Basic",
    attributes: { class: "gjs-fonts gjs-f-text" },
    content: {
      type: "text",
      content: "Insert your text here",
      style: { padding: "10px" },
      activeOnRender: 1,
    },
  });
  bm.add("image", {
    label: "Image",
    category: "Basic",
    attributes: { class: "gjs-fonts gjs-f-image" },
    content: {
      type: "image",
      style: { color: "black" },
      activeOnRender: 1,
    },
  });
  bm.add("video", {
    label: "Video",
    category: "Basic",
    attributes: { class: "fa fa-youtube-play" },
    content: {
      type: "video",
      src: "img/video2.webm",
      style: {
        height: "350px",
        width: "615px",
      },
    },
  });
 
  bm.add("grid-items", {
    label: "Grid Items",
    category: "Basic",
    attributes: { class: "fa fa-th" },
    content: {
      type: 'grid-items',
      
      activeOnRender: 1,
    },
    activate: true,
  });
  bm.add("list-items", {
    label: "List Items",
    category: "Basic",
    attributes: { class: "fa fa-th-list" },
    content: {
      type: 'list-items',
      
      activeOnRender: 1,
    },
    activate: true,
  });
  bm.add("map", {
    label: "Map",
    category: "Basic",
    attributes: { class: "fa fa-map-o" },
    content: {
      type: "map",
      style: { height: "350px" },
      activeOnRender: 1,
      
    },
  });
  // bm.add("custom-section", {

  // });

};
