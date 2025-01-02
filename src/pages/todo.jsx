import notReact from "not-react";
import Component from "not-react/components/component";

export default class Todo extends Component {

    content() {
        return <li onclick={this.props.onclick} id={this.props.index}>{this.props.todo}</li>
    }
}
