import Node from "./node.js";
import { renderNode } from "./utils.js";

class FragmentNode extends Node {
  constructor(children = []) {
    super(undefined, children);
  }

  render() {
    let ret = [];
    this.children.forEach((child) => {
      let rendered = renderNode(child);

      if (rendered instanceof Array) {
        rendered.forEach((elem) => {
          ret.push(elem);
        });
        return;
      } else {
        ret.push(rendered);
      }
    });
    return ret;
  }
}

export default function Fragment({ children }) {
  return new FragmentNode(children);
}
