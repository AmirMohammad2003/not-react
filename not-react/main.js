import { render } from "./globalFunctions.js";
import { globalState } from "./globalState.js";
import Element from "./components/element.js";
import Fragment from "./components/fragment.js";

const notReact = {};

notReact.createElement = (type, props, ...children) => {
  if (typeof type === "function") {
    return new type({ children, attributes: props });
  }
  return Element(type, { children, attributes: props });
};

notReact.Fragment = ({ children }) => {
  return Fragment({ children });
};

export default notReact;
export { render, globalState };
