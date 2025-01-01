export const renderNode = (node) => {
  if (node instanceof Array) {
    return node.map((n) => renderNode(n));
  }
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  if (typeof node == "object" && node.render) {
    return node.render();
  }

  return undefined; // We don't know what that is then.
};
