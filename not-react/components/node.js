import { renderNode } from "./utils.js";
import { registerElementEvent } from "../eventDelegator.js";

export default class Node {
  constructor(elem = undefined, children = []) {
    this.elem = elem;
    this.children = children;
  }

  appendChild(rendered) {
    if (rendered instanceof Array) {
      rendered.forEach((elem) => {
        this.elem.appendChild(elem);
      });
    } else {
      this.elem.appendChild(rendered);
    }
  }

  render() {
    this.elem.innerHTML = "";
    this.children.forEach((child) => {
      this.appendChild(renderNode(child));
    });
    return this.elem;
  }
}
