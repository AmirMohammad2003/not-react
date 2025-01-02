import Node from "./node.js";
import { renderNode } from "./utils.js";
import { registerElementEvent } from "../eventDelegator.js";

export default class Element extends Node {
  constructor(type, props = {}, children = []) {
    super(props, children);
    this.elementType = type;
    this.element = null;

    const element = this.getElement();
    props &&
      Object.keys(props).forEach((key) => {
        if (key.startsWith("__")) {
          return;
        }
        if (key.startsWith("on")) {
          const eventType = key.slice(2).toLowerCase();
          registerElementEvent(element, eventType, props[key]);
        } else {
          element.setAttribute(key, props[key]);
        }
      });
  }

  getElement() {
    if (this.element === null) {
      this.element = document.createElement(this.elementType);
    }
    return this.element;
  }

  appendChild(rendered) {
    if (rendered instanceof Array) {
      rendered.forEach((node) => {
        console.log(node);
        this.element.appendChild(node);
      });
    } else {
      this.element.appendChild(rendered);
    }
  }

  render() {
    this.children.forEach((child) => {
      const renderedChild = renderNode(child);
      if (renderedChild === undefined) {
        return;
      }
      this.appendChild(renderedChild);
    });
    return this.element;
  }
}
