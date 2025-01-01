import Component from "../components/component.js";
import { globalState } from "../globalState.js";

class Router extends Component {
  constructor(routes) {
    super();
    this.routes = routes;
    globalState.subscribe("href", (href) => {
      this.rerender();
    });
  }

  content() {
    let ret = null;
    const path = window.location.pathname;
    Object.keys(this.routes).forEach((route) => {
      if (path === route) {
        const page = this.routes[route];
        ret = page;
        return;
      }
    });
    return ret;
  }
}

export default Router;