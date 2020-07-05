import grapesjs from 'grapesjs';
// import pluginBlocks from 'grapesjs-blocks-basic';
import pluginSlider from 'grapesjs-lory-slider';
// import pluginNavbar from 'grapesjs-navbar';
// import pluginCountdown from 'grapesjs-component-countdown';
// import pluginForms from 'grapesjs-plugin-forms';
// import pluginExport from 'grapesjs-plugin-export';
// import pluginAviary from 'grapesjs-aviary';
// import pluginFilestack from 'grapesjs-plugin-filestack';

import commands from './commands';
import blocks from './blocks';
import components from './components';
import panels from './panels';
import styles from './styles';

export default grapesjs.plugins.add('gjs-preset-webpage', (editor, opts = {}) => {
  let config = opts;


  let defaults = {
    // Which blocks to add

    // Modal import title
    modalImportTitle: 'Import',

    // Modal import button text
    modalImportButton: 'Import',

    // Import description inside import modal
    modalImportLabel: '',

    // Default content to setup on import model open.
    // Could also be a function with a dynamic content return (must be a string)
    // eg. modalImportContent: editor => editor.getHtml(),
    modalImportContent: '',

    // Code viewer (eg. CodeMirror) options
    importViewerOptions: {},

    // Confirm text before cleaning the canvas
    textCleanCanvas: 'Are you sure to clean the canvas?',

    // Show the Style Manager on component change
    showStylesOnChange: 1,

    // Text for General sector in Style Manager
    textGeneral: 'General',

    // Text for Layout sector in Style Manager
    textLayout: 'Layout',

    // Text for Typography sector in Style Manager
    textTypography: 'Typography',

    // Text for Decorations sector in Style Manager
    textDecorations: 'Decorations',

    // Text for Extra sector in Style Manager
    textExtra: 'Extra',

    // Use custom set of sectors for the Style Manager
    customStyleManager: [],

    // `grapesjs-blocks-basic` plugin options
    // By setting this option to `false` will avoid loading the plugin
    blocksOpt: {
      appendTo: '#blocks',
      tableStyle: {
        height: '150px',
        margin: '0 auto 10px auto',
        padding: '5px 5px 5px 5px',
        width: '100%'
      },
      cellStyle: {
        padding: 0,
        margin: 0,
        'vertical-align': 'top',
      },
    },

    // `grapesjs-navbar` plugin options
    // By setting this option to `false` will avoid loading the plugin
    navbarOpts: {},

    // `grapesjs-component-countdown` plugin options
    // By setting this option to `false` will avoid loading the plugin
    countdownOpts: {},

    // `grapesjs-plugin-forms` plugin options
    // By setting this option to `false` will avoid loading the plugin
    formsOpts: {},

    // `grapesjs-plugin-export` plugin options
    // By setting this option to `false` will avoid loading the plugin
    exportOpts: {},

    // `grapesjs-aviary` plugin options, disabled by default
    // Aviary library should be included manually
    // By setting this option to `false` will avoid loading the plugin
    aviaryOpts: 0,

    // `grapesjs-plugin-filestack` plugin options, disabled by default
    // Filestack library should be included manually
    // By setting this option to `false` will avoid loading the plugin
    filestackOpts: 0,
    sliderOpts:{
      sliderBlock:{
        category: 'Basic'
      }
    }
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in config))
      config[name] = defaults[name];
  }




  const {
    blocksOpt,
    navbarOpts,
    countdownOpts,
    formsOpts,
    exportOpts,
    aviaryOpts,
    filestackOpts,
    sliderOpts,
  } = config;

  // Load plugins
  // blocksOpt && pluginBlocks(editor, blocksOpt);
  // navbarOpts && pluginNavbar(editor, navbarOpts);
  // countdownOpts && pluginCountdown(editor, countdownOpts);
  // formsOpts && pluginForms(editor, formsOpts);
  // exportOpts && pluginExport(editor, exportOpts);
  // aviaryOpts && pluginAviary(editor, aviaryOpts);
  // filestackOpts && pluginFilestack(editor, filestackOpts);
  sliderOpts && pluginSlider(editor, sliderOpts);

  // Load components
  components(editor, config);

  // // Load blocks
  blocks(editor, blocksOpt);

  // // Load commands
  commands(editor, config);

  // // Load panels
  panels(editor, config);

  // Load styles
  styles(editor, config);
  // console.log(editor.BlockManager);

});
