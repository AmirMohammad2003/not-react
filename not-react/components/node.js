import { renderNode } from "./utils.js";
export default class Node {
  constructor(elem = undefined, children = [], events = []) {
    this.elem = elem;
    this.children = children;
    this.events = events;
    console.log(elem);
    console.table(events);
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
    this.events.forEach(({ name, callback }) => {
      this.elem.addEventListener(name, callback);
    });
    this.elem.innerHTML = "";
    this.children.forEach((child) => {
      this.appendChild(renderNode(child));
    });
    return this.elem;
  }
}
