import ELement from "../components/element.js";
import { globalState } from "../globalState.js";

export default function Link({ href, children }) {
  return ELement("a", {
    attributes: {
      href,
      onclick: (event) => {
        event.preventDefault();
        history.pushState({}, "", href);
        globalState.set("href", href);
      },
    },
    children,
  });
}
