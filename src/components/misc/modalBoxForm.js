export default (editor, config, callbackReturnToComponent) => {

  const formData = config.formData || {};

  const pfx = editor.getConfig("stylePrefix");
  const modal = editor.Modal;
  let container = document.createElement("div");
  const modalTitle =
    config.modalTitle || "Input the required property";


  let formHolder = document.createElement("form");
  formHolder.setAttribute("style", "width: 30%;margin: 10px 0;");
  formHolder.setAttribute("method", "post");
  const btnSubmit = document.createElement("input");
  btnSubmit.type = "submit";
  btnSubmit.value = "Create Component";
  btnSubmit.className = `${pfx}btn-prim`;
  btnSubmit.setAttribute("style", `margin: 10px 0;`);


  let inputs = {};
  for (var i = 0; i < formData.length; i++) {
    let inputType = formData[i];

    let containerInput = document.createElement('div');
    containerInput.setAttribute('class', `${pfx}sm-property`);

    let inputField = document.createElement('div');
    inputField.setAttribute("class", `${pfx}fields`);

    let inputHolder = document.createElement('div');
    inputHolder.setAttribute("class", `${pfx}field`);
    inputHolder.setAttribute("style", `margin: 5px 0;`);

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", inputType.type);
    inputElement.setAttribute("id", `${pfx}${inputType.id}-input`);
    inputElement.setAttribute('name', `${pfx}form-${inputType.id}`);
    inputElement.setAttribute("class", `${pfx}field ${pfx}input-holder`);
    inputElement.setAttribute(
      "onclick",
      "this.select()",
    )

    if (inputType.type == 'number') {
      inputElement.valueAsNumber = inputType.defaultValue;
    } else {
      inputType.value = inputElement.defaultValue;
    }
    inputHolder.append(inputElement);
    inputField.appendChild(inputHolder);

    let labelInput = document.createElement("label");
    labelInput.textContent = inputType.name;
    labelInput.setAttribute("for", inputElement.getAttribute("id"));
    labelInput.className = `${pfx}sm-label`;
    labelInput.setAttribute("style", "font-size:1.5ch;");
    containerInput.append(labelInput, inputField);
    inputs[inputType.id] = inputElement;
    formHolder.appendChild(containerInput);

  }
  
  formHolder.onsubmit = (e) => {
    e.preventDefault();
    let returned_inputs = {}
    Object.keys(inputs).forEach((key) => {
      returned_inputs[key] = inputs[key].value
    });

    callbackReturnToComponent(returned_inputs);
    modal.close();
  };


  formHolder.appendChild(btnSubmit);
  container.appendChild(formHolder);

  modal.setTitle(modalTitle);
  modal.setContent(container);
  return modal.open().getModel();
};
