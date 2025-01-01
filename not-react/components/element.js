import Node from "./node.js";
export default function Element(
  elem,
  props = { children: [], attributes: {}, events: {} },
) {
  const { children, attributes, events } = props;
  const element = document.createElement(elem);
  attributes &&
    Object.keys(attributes).forEach((key) =>
      element.setAttribute(key, attributes[key]),
    );
  events &&
    Object.keys(events).forEach((key) =>
      element.addEventListener(key, events[key]),
    );
  const node = new Node(element, children);
  return node;
}
