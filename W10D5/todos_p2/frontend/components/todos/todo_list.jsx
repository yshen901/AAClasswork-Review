import React from "react";
import TodoListItem from "./todo_list_item";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="todo-list">
        <ul>
          { this.props.todos.map((todo, idx) => (
            <TodoListItem key={idx} todo={todo}></TodoListItem>
          ))}
        </ul>
      </div>
    )
  }
}