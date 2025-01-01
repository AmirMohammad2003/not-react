import Component from "../not-react/components/component.js";
import Fragment from "../not-react/components/fragment.js";
import ELement from "../not-react/components/element.js";
import Text from "../not-react/components/text.js";
import Router from "../not-react/router/router.js";
import Link from "../not-react/router/link.js";

import AboutMe from "./pages/about-me.js";
import TodoApp from "./pages/todo-app.js";

export default class App extends Component {
  constructor() {
    super();
  }
  content() {
    // This thing lacks state to avoid re-renders.
    return new Router({
      "/": Fragment({
        children: [
          Link({
            href: "/about/",
            children: [Text("About me")],
          }),
          ELement("br"),
          Link({
            href: "/todo-app/",
            children: [Text("Go to todo app")],
          }),
        ],
      }),
      "/about/": new AboutMe(),
      "/todo-app/": new TodoApp(),
    });
  }
}
