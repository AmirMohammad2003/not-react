import Component from "not-react/components/component.js";
import Fragment from "not-react/components/fragment.js";
import ELement from "not-react/components/element.js";
import Router from "not-react/router/router.js";
import Link from "not-react/router/link.js";

import AboutMe from "./pages/about-me.js";
import TodoApp from "./pages/todo-app.jsx";

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
            children: ["About me"],
          }),
          ELement("br"),
          Link({
            href: "/todo-app/",
            children: ["Go to todo app"],
          }),
        ],
      }),
      "/about/": new AboutMe(),
      "/todo-app/": new TodoApp(),
    });
  }
}
