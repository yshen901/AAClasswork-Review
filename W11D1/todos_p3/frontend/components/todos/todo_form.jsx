import React from "react";
import { randomId } from "../../util/util";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      tagNames: [],
      newTag: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.submitSuccess = this.submitSuccess.bind(this);
    this.submitFailure = this.submitFailure.bind(this);
  }

  handleChange(e) { // controlled input
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) { // sends to store api
    e.preventDefault();

    let { title, body, tagNames } = this.state;
    this.props.createTodo({
      title,
      body,
      done: false,
      tag_names: tagNames
    })
    .then(this.submitSuccess, this.submitFailure);
  }

  handleAddTag(e) {
    e.preventDefault();

    let {tagNames, newTag} = this.state;
    this.setState({tagNames: [...tagNames, newTag], newTag: ""});
  }

  submitSuccess() {
    this.setState({title: "", body: "", tagNames: [], newTag: ""});
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
        <div className="tags-form">
          <ul className="tags-list">
            { this.state.tagNames.map((tag, idx) => (
              <li className="tag-name" key={idx}>{tag}</li>
            ))}
          </ul>
          <input type="text" name="newTag" value={this.state.newTag} onChange={this.handleChange}/>
          <button className="add-tag-button" onClick={this.handleAddTag}>Add Tag</button>
        </div>
        <button className="todo-form-submit" onClick={this.handleSubmit}>Submit Task</button>
        { this.props.errors.map((error) => (
          <div className="form-error">{error.body} ({error.status})</div>
        )) }
      </div>
    )
  }
}