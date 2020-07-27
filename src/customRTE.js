
import pluginCKEditor from 'grapesjs-plugin-ckeditor'



export default (editor, config) => {
    const rteToolbar = editor.RichTextEditor.getToolbarEl();
    // [].forEach.call(rteToolbar.children, (child) => {
    //     child.style.display = "none";
    // });
	const rteEl = document.getElementsByClassName('gjs-rte-toolbar')[0];
	console.log(rteToolbar);



    pluginCKEditor(editor, {
        position: 'center',
        options: {
        	language: 'en',
        	skin: 'moono-dark',
        	// sharedSpaces: rteToolbar,
    //     	toolbar: [
	   // //      	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
				// // { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
				// // { name: 'insert', groups: [ 'insert' ] },
				// // { name: 'forms', groups: [ 'forms' ] },
				// // { name: 'tools', groups: [ 'tools' ] },
				// // { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
				// // { name: 'others', groups: [ 'others' ] },
				// { name: 'styles', groups: [ 'styles' ] },
				// { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
				// { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
				// { name: 'links', groups: [ 'links' ] },
				// '/',
				// { name: 'colors', groups: [ 'colors' ] },
				// // { name: 'about', groups: [ 'about' ] }
	   //      ],
	        // removeButtons: 'Underline,Subscript,Superscript,Anchor',
	        extraPlugins: 'dialog,link,magicline'
	    },

    });

    

	// 	throw new Error("CKEDITOR instance not found");
	// }

	// editor.setCustomRte({
	// 	enable(el, rte) {
	// 		// If already exists I'll just focus on it
	// 		if (rte) {
	// 			this.focus(el, rte);
	// 			return rte;
	// 		}

	// 		// el.contentEditable = true;

	// 		// Seems like 'sharedspace' plugin doesn't work exactly as expected
	// 		// so will help hiding other toolbars already created
	// 		let rteToolbar = editor.RichTextEditor.getToolbarEl();
	// 		[].forEach.call(rteToolbar.children, (child) => {
	// 			child.style.display = "none";
	// 		});

            
	// 		// Check for the mandatory options
	// 		// var opt = c.options;
	// 		// var plgName = "sharedspace";

	// 		// if (opt.extraPlugins) {
	// 		// 	if (typeof opt.extraPlugins === "string")
	// 		// 		opt.extraPlugins += "," + plgName;
	// 		// 	else opt.extraPlugins.push(plgName);
	// 		// } else {
	// 		// 	opt.extraPlugins = plgName;
	// 		// }

	// 		// if (!c.options.sharedSpaces) {
	// 		// 	c.options.sharedSpaces = { top: rteToolbar };
	// 		// }

	// 		// Init CkEditors
	// 		rte = CKEDITOR.inline(el, {
 //                sharedSpaces: {
 //                    top: rteToolbar
 //                }
 //            });

	// 		// Make click event propogate
	// 		rte.on("contentDom", () => {
	// 			var editable = rte.editable();
	// 			editable.attachListener(editable, "click", () => {
	// 				el.click();
	// 			});
	// 		});

	// 		// The toolbar is not immediatly loaded so will be wrong positioned.
	// 		// With this trick we trigger an event which updates the toolbar position
	// 		rte.on("instanceReady", (e) => {
	// 			var toolbar = rteToolbar.querySelector("#cke_" + rte.name);
	// 			if (toolbar) {
	// 				toolbar.style.display = "block";
	// 			}
	// 			editor.trigger("canvasScroll");
	// 		});

	// 		// Prevent blur when some of CKEditor's element is clicked
	// 		rte.on("dialogShow", (e) => {
	// 			const editorEls = grapesjs.$(
	// 				".cke_dialog_background_cover, .cke_dialog"
	// 			);
	// 			["off", "on"].forEach((m) =>
	// 				editorEls[m]("mousedown", stopPropagation)
	// 			);
	// 		});

	// 		this.focus(el, rte);

	// 		return rte;
	// 	},

	// 	disable(el, rte) {
	// 		el.contentEditable = false;
	// 		if (rte && rte.focusManager) rte.focusManager.blur(true);
	// 	},

	// 	focus(el, rte) {
	// 		// Do nothing if already focused
	// 		if (rte && rte.focusManager.hasFocus) {
	// 			return;
	// 		}
	// 		el.contentEditable = true;
	// 		rte && rte.focus();
	// 	},
	// });

	// // Update RTE toolbar position
	// console.log(rteEl);
	// rteEl.style.display = 'none';
	editor.on('rteToolbarPosUpdate', (pos) => {
		pos.top = '0px';
	    // Update by position
	    
	 });


  window.addEventListener("load", () => {

	// const rteEl = document.getElementsByClassName('gjs-rte-toolbar')[0];
    const rte_message = document.querySelector('#gjs-sm-message');
	document.getElementById('gjs-sm-typography').appendChild(rteToolbar);

  	editor.on("rte:enable", (view) => {
		// rteToolbar.style.display = 'inline-block';
		rteToolbar.style.position = 'relative';
		rteToolbar.style.top = '0px';
		rteToolbar.style.left = '0px';
		// rteToolbar.style.pointerEvents = 'none';


		rte_message.style.display = 'none';
		// Update by position
        // console.log(rteEl)
		// // switch (c.position) {
		// 	// case "center":
		// 		let diff = pos.elementWidth / 2 - pos.targetWidth / 2;
		// 		pos.left = pos.elementLeft + diff;
		// 		// break;
		// 	// case "right":
		// 		// let width = pos.targetWidth;
		// 		// pos.left = pos.elementLeft + pos.elementWidth - width;
		// 		// break;
		// // }

		// if (pos.top <= pos.canvasTop) {
		// 	pos.top = pos.elementTop + pos.elementHeight;
		// }

		// // Check if not outside of the canvas
		// if (pos.left < pos.canvasLeft) {
		// 	pos.left = pos.canvasLeft;
		// }
	});

	editor.on('rte:disable', (view) => {
    	const rte_message = document.querySelector('#gjs-sm-message');
		rte_message.style.display = 'inline-flex';

	});
  });
	
};
