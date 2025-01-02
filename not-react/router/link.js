import Component from "../components/component.js";
import notReact from "../main.js";
import { globalState } from "../globalState.js";

export default class Link extends Component {
  content() {
    const href = this.props.href;
    const children = this.children;
    return notReact.createElement(
      "a",
      {
        href,
        onclick: (event) => {
          event.preventDefault();
          history.pushState({}, "", href);
          globalState.set("href", href);
        },
      },
      children,
    );
  }
}
