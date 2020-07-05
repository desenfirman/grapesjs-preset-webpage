import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
} from "./../consts";

export default (editor, config) => {
  const pn = editor.Panels;
  const eConfig = editor.getConfig();
  const crc = "create-comp";
  const mvc = "move-comp";
  const swv = "sw-visibility";
  const expt = "export-template";
  const osm = "open-sm";
  const otm = "open-tm";
  const ola = "open-layers";
  const obl = "open-blocks";
  const ful = "fullscreen";
  const prv = "preview";

  eConfig.showDevices = 0;
  // console.log(pn.getPanels());

  // pn.addPanel([

  //   {
  //     id: "views",
  //     element: '.panel__trait-manager',
  //     buttons: [
  //       {
  //         id: osm,
  //         command: osm,
  //         active: true,
  //         className: "fa fa-paint-brush",
  //       },
  //       {
  //         id: otm,
  //         command: otm,
  //         className: "fa fa-cog",
  //       },
  //       {
  //         id: ola,
  //         command: ola,
  //         className: "fa fa-bars",
  //       },
  //       {
  //         id: obl,
  //         command: obl,
  //         className: "fa fa-th-large",
  //       },
  //     ],
  //   },
  // ]);
  pn.addPanel({
    id: "panel-top",
    el: ".panel__top",
  });

  const panelBasicActions = pn.addPanel({
    id: "basic-actions",
    el: ".panel__basic-actions-1",
  });
  panelBasicActions.get("buttons").add([
    
    {
      id: expt,
      className: "fa fa-code",
      command: (e) => e.runCommand(expt),
    },
    {
      id: "undo",
      // className: "fa fa-undo",
      command: (e) => e.runCommand("core:undo"),
      label: 'Undo',
    },
    {
      id: "redo",
      // className: "fa fa-repeat",
      command: (e) => e.runCommand("core:redo"),
      label: 'Redo',
    },
    {
      id: cmdClear,
      // className: "fa fa-trash",
      command: (e) => e.runCommand(cmdClear),
      label: 'Clear',
    },
    {
      id: swv,
      command: swv,
      context: swv,
      // className: "fa fa-square-o",
      label: 'Toogle Component',
      active: 1,
    },
  ]);

  // Add devices buttons
  const panelDevices = pn.addPanel({ id: "basic-actions-2", el: ".panel__basic-actions-2" });
  panelDevices.get("buttons").add([
    // {
    //   id: cmdDeviceDesktop,
    //   command: cmdDeviceDesktop,
    //   className: "fa fa-desktop",
    //   active: 1,
    // },
    // {
    //   id: cmdDeviceTablet,
    //   command: cmdDeviceTablet,
    //   className: "fa fa-tablet",
    // },
    // {
    //   id: cmdDeviceMobile,
    //   command: cmdDeviceMobile,
    //   className: "fa fa-mobile",
    // },
    {
      id: prv,
      context: prv,
      command: (e) => e.runCommand(prv),
      // className: "fa fa-eye",
      label: 'Preview',
    },
    {
      id: ful,
      command: ful,
      context: ful,
      // className: "fa fa-arrows-alt",
      label: 'Full Screen',
    },
    {
      id: expt,
      // className: "fa fa-download",
      command: (e) => e.runCommand(expt),
      label: 'Save',
    },
  ]);

  

  // const openBl = pn.getButton("views", obl);
  // editor.on("load", () => {
  //   openBl && openBl.set("active", 1);

  //   // eConfig.blockManager.appendTo = "#blocks";
  //   // console.log("econfig", eConfig);
  // });

  // // On component change show the Style Manager
  // config.showStylesOnChange &&
    // editor.on("component:selected", () => {
    //   const openSmBtn = pn.getButton("views", osm);
    //   const openLayersBtn = pn.getButton("views", ola);

    //   // Don't switch when the Layer Manager is on or
    //   // there is no selected component
    //   if (
    //     (!openLayersBtn || !openLayersBtn.get("active")) &&
    //     editor.getSelected()
    //   ) {
    //     openSmBtn && openSmBtn.set("active", 1);
    //   }
    // });
};
