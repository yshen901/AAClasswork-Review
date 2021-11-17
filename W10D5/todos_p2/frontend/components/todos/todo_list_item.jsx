import React from "react";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="todo-list-item">
        {this.props.todo.title}: {this.props.todo.body}
      </li>
    ) 
  }
}