import Component from "../../not-react/components/component.js";
import Element from "../../not-react/components/element.js";
import Fragment from "../../not-react/components/fragment.js";
import Text from "../../not-react/components/text.js";

export default class TodoApp extends Component {
  constructor() {
    super();
    this.createState("todos", []);
  }
  content() {
    return Fragment({
      children: [
        Element("h1", { children: [Text("Todo App")] }),
        Element("input", {
          attributes: { type: "text", placeholder: "Add todo" },
        }),
        Element("button", {
          children: [Text("Add")],
          events: {
            click: (e) => {
              e.preventDefault();
              const value = e.target.previousElementSibling.value;
              this.setState("todos", (old) => old.push(value));
            },
          },
        }),
        Element("ul", {
          children: this.states.todos.map((todo, index) =>
            Element("li", {
              children: [Text(todo)],
              attributes: { id: index },
              events: {
                click: (e) => {
                  this.setState("todos", (old) => old.splice(index, 1));
                },
              },
            }),
          ),
        }),
      ],
    });
  }
}
