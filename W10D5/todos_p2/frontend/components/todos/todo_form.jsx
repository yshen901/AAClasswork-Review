import React from "react";
import { randomId } from "../../util/util";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let { title, body } = this.state;
    this.props.receiveTodo({
      title,
      body,
      done: false,
      id: randomId()
    });
  }

  render() {
    return (
      <div id="todo-form">
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        <input type="text" name="body" value={this.state.body} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit Task</button>
      </div>
    )
  }
}