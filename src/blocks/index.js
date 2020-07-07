// import 'style.scss';

export default (editor, config) => {
  // console.log(bm.getConfig().set('appendTo', '#blockss'));

  const bm = editor.BlockManager;
  let tableStyleStr = "";
  let cellStyleStr = "";
  const toAdd = (name) => config.blocks.indexOf(name) >= 0;
  const opt = config;
  console.log(opt, bm);
  let tableStyle = opt.tableStyle || {};
  let cellStyle = opt.cellStyle || {};
  for (let prop in tableStyle) {
    tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
  }
  for (let prop in cellStyle) {
    cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
  }
  bm.onLoad(() => {
    bm.appendTo = "#blocks";
  });
  // bm.appendTo = opt.appendTo;

  bm.add("sect100", {
    label: "Section",
    category: "Basic",
    attributes: { class: "gjs-fonts gjs-f-b1" },
    content: `<table style="${tableStyleStr}">
      <tr>
        <td style="${cellStyleStr}"></td>
      </tr>
      </table>`,
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
  let gridItem = `<table class="grid-item-card">
      <tr>
        <td class="grid-item-card-cell">
          <img class="grid-item-image" src="http://placehold.it/250x150/78c5d6/fff/" alt="Image"/>
          <table class="grid-item-card-body">
            <tr>
              <td class="grid-item-card-content">
                <h1 class="card-title">Title here</h1>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;
  bm.add("grid-items", {
    label: "Grid Items",
    category: "Basic",
    content: `<table class="grid-item-row">
      <tr>
        <td class="grid-item-cell2-l">${gridItem}</td>
        <td class="grid-item-cell2-r">${gridItem}</td>
      </tr>
    </table>`,
    attributes: { class: "fa fa-th" },
  });
  let listItem = `<table class="list-item">
      <tr>
        <td class="list-item-cell">
          <table class="list-item-content">
            <tr class="list-item-row">
              <td class="list-cell-left">
                <img class="list-item-image" src="http://placehold.it/150x150/78c5d6/fff/" alt="Image"/>
              </td>
              <td class="list-cell-right">
                <h1 class="card-title">Title here</h1>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;
  bm.add("list-items", {
    label: "List Items",
    category: "Basic",
    content: listItem + listItem,
    attributes: { class: "fa fa-th-list" },
  });
  bm.add("map", {
    label: "Map",
    category: "Basic",
    attributes: { class: "fa fa-map-o" },
    content: {
      type: "map",
      style: { height: "350px" },
    },
  });
  bm.add("custom-section-blocks", {
    label: 'Section',
    content:{
      type: 'custom-section'
    },
    activate: true
  });

  editor.on("component:add", (model, argument) => {
    //filter using component name
    console.log(model.getName());
    if (model.getName() === "modelName") {
      //show modal
    } //filter using css Class
    if (model.getAttrToHTML().class === "className") {
      //show model
    }
  });

  // toAdd('link-block') && bm.add('link-block', {
  //   category: 'Basic',
  //   label: 'Link Block',
  //   attributes: { class: 'fa fa-link' },
  //   content: {
  //     type:'link',
  //     editable: false,
  //     droppable: true,
  //     style:{
  //       display: 'inline-block',
  //       padding: '5px',
  //       'min-height': '50px',
  //       'min-width': '50px'
  //     }
  //   },
  // });

  // toAdd('quote') && bm.add('quote', {
  //   label: 'Quote',
  //   category: 'Basic',
  //   attributes: { class: 'fa fa-quote-right' },
  //   content: `<blockquote class="quote">
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
  //     </blockquote>`
  // });

  // toAdd('text-basic') && bm.add('text-basic', {
  //   category: 'Basic',
  //   label: 'Text section',
  //   attributes: { class: 'gjs-fonts gjs-f-h1p' },
  //   content: `<section class="bdg-sect">
  //     <h1 class="heading">Insert title here</h1>
  //     <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
  //     </section>`
  // });
};
