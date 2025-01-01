import {
  getElementTree,
  setElementTree,
  setGlobalState,
  setRoot,
} from "./globalState.js";
export const render = function (root, app) {
  window.onpopstate = function (_) {
    setGlobalState("href", window.location.href);
  };
  setRoot(root);
  if (getElementTree() === undefined) {
    root.innerHTML = "";
    setElementTree(app);
    const rendered = getElementTree().content().render();
    if (rendered instanceof Array) {
      rendered.forEach((elem) => {
        root.appendChild(elem);
      });
    } else {
      root.appendChild(rendered);
    }
  }
};
