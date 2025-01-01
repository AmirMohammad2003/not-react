class Component {
  constructor(children = [], attributes = {}) {
    this.children = children;
    this.attributes = attributes;
    this.cache = undefined;
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

  _insertBefore(elem, before) {
    const parent = before.parentElement;
    if (elem instanceof Array) {
      elem.forEach((el) => {
        parent.insertBefore(el, before);
      });
    } else {
      parent.insertBefore(elem, before);
    }
  }

  rerender() {
    this.doRerender = true;
    console.log(this.cachedRender);
    if (this.cachedRender === undefined) {
      return;
    }
    if (this.cachedRender instanceof Array) {
      const ref = this.cachedRender[0];
      const old = this.cachedRender;
      this._insertBefore(this.render(), ref);
      console.log(this.cachedRender);
      old.forEach((elem) => {
        elem.remove();
      });
      return;
    }
    const ref = this.cachedRender;
    const rendered = this.render();
    if (rendered instanceof Array) {
      ref.replaceWith(rendered[0]);
      for (let i = 1; i < rendered.length; i++) {
        rendered[i - 1].after(rendered[i]);
      }
      return;
    }
    ref.replaceWith(rendered);
  }

  render() {
    if (this.doRerender === true) {
      this.cache = this.content();
      this.cachedRender = this.cache.render();
      this.doRrender = false;
    }
    // console.log(this.cachedRender);
    return this.cachedRender;
  }
}

export default Component;
