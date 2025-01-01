class TextNode {
  constructor(text) {
    this.text = text;
    this.node = undefined;
  }
  render() {
    if (this.node === undefined) this.node = document.createTextNode(this.text);
    return this.node;
  }
}

export default function Text(text) {
  return new TextNode(text);
}
