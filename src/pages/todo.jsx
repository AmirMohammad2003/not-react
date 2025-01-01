import notReact from "not-react";
import Component from "not-react/components/component";

export default class Todo extends Component {
    constructor({ attributes }) {
        super();
        this.index = attributes.index;
        this.todo = attributes.todo;
        this.onclick = attributes.onclick;
    }

    content() {
        return <li onclick={this.onclick} id={this.index}>{this.todo}</li>
    }
}
