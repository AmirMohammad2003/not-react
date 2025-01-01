import { render } from "../globalFunctions.js";
export default function Link({ href, children }) {
  const a = document.createElement("a");
  a.href = href;
  a.innerHTML = children;
  console.log(a);
  a.onclick = function (e) {
    e.preventDefault();
    const { href } = e.target;
    history.pushState({}, "", href);
    render();
  };
  return a;
}
