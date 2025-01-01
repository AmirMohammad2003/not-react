import Node from "./node.js";
export default function Element(
  elem,
  props = { children: [], attributes: {}, events: {} },
) {
  const { children, attributes } = props;
  const element = document.createElement(elem);
  let events = [];
  attributes &&
    Object.keys(attributes).forEach((key) => {
      if (key.startsWith("__")) {
        return;
      }
      if (key.startsWith("on")) {
        events.push({
          name: key.slice(2).toLowerCase(),
          callback: attributes[key],
        });
      } else {
        element.setAttribute(key, attributes[key]);
      }
    });
  const node = new Node(element, children, events);
  return node;
}
