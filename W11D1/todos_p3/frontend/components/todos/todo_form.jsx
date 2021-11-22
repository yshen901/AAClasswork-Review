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
    this.submitSuccess = this.submitSuccess.bind(this);
    this.submitFailure = this.submitFailure.bind(this);
  }

  handleChange(e) { // controlled input
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) { // sends to store api
    e.preventDefault();

    let { title, body } = this.state;
    this.props.createTodo({
      title,
      body,
      done: false,
    })
    .then(this.submitSuccess, this.submitFailure);
  }

  submitSuccess() {
    this.setState({title: "", body: ""});
    this.props.clearErrors();
  }

  submitFailure(err) {
    this.props.receiveError(err);
  }

  render() {
    return (
      <div id="todo-form">
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        <input type="text" name="body" value={this.state.body} onChange={this.handleChange}/>
        <button className="todo-form-submit" onClick={this.handleSubmit}>Submit Task</button>
        { this.props.errors.map((error) => (
          <div className="form-error">{error.body} ({error.status})</div>
        )) }
      </div>
    )
  }
}