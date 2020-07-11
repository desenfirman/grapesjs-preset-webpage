import openImport from "./openImport";

import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
  cmdPromptInitSection,
} from "./../consts";

export default (editor, config) => {
  const cm = editor.Commands;
  const txtConfirm = config.textCleanCanvas;
  const pfx = editor.getConfig("stylePrefix")

  cm.add(cmdImport, openImport(editor, config));
  cm.add(cmdDeviceDesktop, (e) => e.setDevice("Desktop"));
  cm.add(cmdDeviceTablet, (e) => e.setDevice("Tablet"));
  cm.add(cmdDeviceMobile, (e) => e.setDevice("Mobile portrait"));
  cm.add(
    cmdClear,
    (e) => confirm(txtConfirm) && e.runCommand("core:canvas-clear")
  );

  cm.add('preview', {
     fsChanged(pfx, e) {
      var d = document;
      var ev = (pfx || '') + 'fullscreenchange';
      if (!this.isEnabled()) {
        this.stop(null, this.sender);
        document.removeEventListener(ev, this.fsChanged);
      }
    },
    run(editor, sender){
      console.log(sender, editor);
      const main_container = document.getElementById(`${pfx}main-container`);
      console.log(main_container.children)
      if (main_container.classList.contains('preview')) {
        [...main_container.children].forEach((el) => {
          if (el.id != 'top-panel' && el.id != 'gjs') {
            el.style.display = 'block';
          }
        })
        main_container.classList.remove('preview');      
      } else {
        [...main_container.children].forEach((el) => {
          if (el.id != 'top-panel' && el.id != 'gjs') {
            el.style.display = 'none';
          }
        })
        main_container.classList.add('preview');
      }
      editor.trigger('change:canvasOffset');
      editor.refresh();
    },
  });
};
