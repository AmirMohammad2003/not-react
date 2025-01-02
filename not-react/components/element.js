import Node from "./node.js";
import { registerElementEvent } from "../eventDelegator.js";

export default function Element(
  elem,
  props = { children: [], attributes: {} },
) {
  const { children, attributes } = props;
  const element = document.createElement(elem);
  attributes &&
  Object.keys(attributes).forEach((key) => {
    if (key.startsWith("__")) {
      return;
    }
    if (key.startsWith("on")) {
      const eventType = key.slice(2).toLowerCase();
      registerElementEvent(element, eventType, attributes[key]);
    } else {
      element.setAttribute(key, attributes[key]);
    }
  });
  
  const node = new Node(element, children);
  return node;
}
