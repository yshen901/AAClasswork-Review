import React from 'react';
import { randomId } from "../../util/util";

export default class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      done: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value}) //pull value from controlled input
  }

  handleSubmit(e) {
    e.preventDefault();
    let {title, body} = this.state;
    this.props.receiveStep({
      title,
      body,
      done: false,
      id: randomId(),
      todo_id: this.props.todoId
    });

    this.setState({title: "", body:""});
  }

  render() {
    return (
      <div className="step-form">
        <input className="step-form-input" type="text" value={this.state.title} name="title" onChange={this.handleChange}/>
        <input className="step-form-input" type="text" value={this.state.body} name="body" onChange={this.handleChange}/>
        <button className="step-form-submit" onClick={this.handleSubmit}>Add Step</button>
      </div>
    );
  }
}