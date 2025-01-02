/**
 * @class Node
 * @description A class to represent a node in the virtual DOM.
 * @property {Object} props - The properties of the node.
 * @property {Array<Node>} children - The children of the node.
 * @property {Node} parent - The parent of the node.
 *
 */
export default class Node {
  constructor(props = {}, children = []) {
    this.props = props;
    this.children = children;
    const parent = this;
    this.children.forEach((child) => {
      child && child.render && (child.parent = parent);
      console.log(typeof child, child, child.render, child.parent, parent);
    });
  }

  replaceWith(node) {
    if (this.parent === undefined) {
      return;
    }
    const index = this.parent.children.indexOf(this);
    this.parent.children[index] = node;
    node.parent = this.parent;
  }

  child_rerendered() {
    // all good.
  }
}
