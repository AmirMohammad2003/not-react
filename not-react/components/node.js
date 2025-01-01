export default class Node {
  constructor(elem = undefined, children = []) {
    this.elem = elem;
    this.children = children;
  }

  appendChild(child) {
    const renderd = child.render();
    if (renderd instanceof Array) {
      renderd.forEach((elem) => {
        this.elem.appendChild(elem);
      });
    } else {
      this.elem.appendChild(renderd);
    }
  }

  render() {
    this.elem.innerHTML = "";
    this.children.forEach((child) => {
      this.appendChild(child);
    });
    return this.elem;
  }
}
