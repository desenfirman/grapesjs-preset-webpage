export default (editor, config) => {
  const pfx = editor.getConfig("stylePrefix");
  const modal = editor.Modal;
  let container = document.createElement("div");
  const modalTitle =
    config.modalImportLabel || "How many section you will divided into?";

  let sectionSizeInput = document.createElement("input");
  sectionSizeInput.setAttribute("type", "number");
  sectionSizeInput.setAttribute("id", `${pfx}section-size-input`);



  let labelSectionSize = document.createElement("label");
  labelSectionSize.textContent = 'Section Size: ';
  labelSectionSize.setAttribute("for", sectionSizeInput.getAttribute("id"));
  labelSectionSize.className = `${pfx}sm-label`;
  labelSectionSize.setAttribute('style', 'font-size:1.5ch;');

  
  // Init import button
  const btnSubmit = document.createElement("button");
  btnSubmit.type = "button";
  btnSubmit.textContent = "Create Section";
  btnSubmit.className = `${pfx}btn-prim`;
  btnSubmit.onclick = (e) => {
    editor.setComponents(sectionSizeInput.getValue());
    modal.close();
    return modal;
  };
  
  let inputHolder = document.createElement("div");
  inputHolder.setAttribute('class', `${pfx}field  ${pfx}input-holder`);
  inputHolder.setAttribute('style', 'width: 30%;margin: 10px 0;');

  
  
  inputHolder.appendChild(sectionSizeInput);
  container.appendChild(labelSectionSize);

  container.appendChild(inputHolder);
  container.appendChild(btnSubmit);

  return {
    run(editor) {
      modal.setTitle(modalTitle);
      modal.setContent(container);
      modal
        .open()
        .getModel()
        .once("change:open", () => editor.stopCommand(this.id));
    },

    stop() {
      modal.close();
    },
  };
};
