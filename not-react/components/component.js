import { renderNode } from "./utils.js";
import Node from "./node.js";

class Component extends Node {
  constructor(props = {}, children = []) {
    super(props, children);
    this.cache = undefined;
    this.cachedRender = [];
    this.states = {};
    this.doRerender = true;
  }

  createState(name, init) {
    if (this.states[name] !== undefined) {
      return;
    }
    this.states[name] = init;
  }

  setState(name, value) {
    if (value instanceof Function) {
      value(this.states[name]);
      this.rerender();
      return;
    } else if (this.states[name] === value) {
      return;
    }
    this.states[name] = value;
    this.rerender();
  }

  insertBefore(elem, before) {
    const parent = before.parentElement;
    if (elem instanceof Array) {
      elem.forEach((el) => {
        parent.insertBefore(el, before);
      });
    } else {
      parent.insertBefore(elem, before);
    }
  }

  _rerender() {
    if (this.cachedRender === undefined) {
      return;
    }
    this.doRerender = true;

    if (this.cachedRender instanceof Array) {
      const ref = this.cachedRender[0];
      const old = this.cachedRender;
      this.insertBefore(this.render(), ref);
      old.forEach((elem) => {
        elem.remove();
      });
      return;
    }
    const ref = this.cachedRender;
    console.log(ref);
    const rendered = this.render();
    if (rendered instanceof Array) {
      this.insertBefore(rendered, ref);
      ref.remove();
      return;
    }
    ref.replaceWith(rendered);
    console.log(this.cachedRender);
  }
  child_rerendered() {
    console.log("I was called");
    this.rerender();
  }

  _post_rerender() {
    console.log(this.parent);
    if (this.parent !== undefined) this.parent.child_rerendered();
  }

  rerender() {
    this._rerender();
    this._post_rerender();
  }

  render() {
    if (this.doRerender === true) {
      this.cache = this.content();
      this.cachedRender = renderNode(this.cache);
      this.doRerender = false;
    }
    return this.cachedRender;
  }
}

export default Component;
