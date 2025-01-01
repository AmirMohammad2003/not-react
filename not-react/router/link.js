import ELement from "../components/element.js";
import { setGlobalState } from "../globalState.js";
export default function Link({ href, children }) {
  const handleClick = function (e) {
    e.preventDefault();
    const { href } = e.target;
    history.pushState({}, "", href);
    setGlobalState("href", window.location.href);
  };

  return ELement("a", {
    children,
    attributes: { href },
    events: { click: handleClick },
  });
}
