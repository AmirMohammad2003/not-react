import notReact from "not-react";
import Component from "not-react/components/component.js";

import Todo from "./todo.jsx";

export default class TodoApp extends Component {
  constructor() {
    super();
    this.createState("todos", []);
  }
  content() {
    return (
      <div>
        <h1>Todo App</h1>
        <input type="text" placeholder="Add todo" />
        <button
          onclick={(e) => {
            const value = e.target.previousElementSibling.value;
            this.setState("todos", (old) => old.push(value));
          }}
        >
          Add
        </button>
        <ul>
          {this.states.todos.map((todo, index) => (
            <Todo
              todo={todo}
              index={index}
              onclick={(_) => {
                this.setState("todos", (old) => old.splice(index, 1));
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

