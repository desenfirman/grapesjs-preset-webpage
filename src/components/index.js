import customSectionComp from "./customSection";

export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  // ...
  domc.addType("custom-section", customSectionComp(defaultModel, defaultView));
};
