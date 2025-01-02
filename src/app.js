import notReact from "not-react";
import Component from "not-react/components/component.js";
import Router from "not-react/router/router.js";
import Link from "not-react/router/link.js";

import AboutMe from "./pages/about-me.js";
import TodoApp from "./pages/todo-app.jsx";

export default class App extends Component {
  content() {
    return (
      <Router
        routes={{
          "/": (
            <div>
              <Link href="/about/">About Me</Link>
              <br />
              <Link href="/todo-app/">Go to todo app</Link>
            </div>
          ),
          "/about/": <AboutMe />,
          "/todo-app/": <TodoApp />,
        }}
      />
    );
  }
}
