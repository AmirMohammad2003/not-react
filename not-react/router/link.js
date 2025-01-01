import ELement from "../components/element.js";
import { globalState } from "../globalState.js";
export default function Link({ href, children }) {
  const handleClick = function(e) {
    e.preventDefault();
    const { href } = e.target;
    history.pushState({}, "", href);
    globalState.set("href", window.location.href);
  };

  return ELement("a", {
    children,
    attributes: { href, onclick: handleClick },
  });
}
