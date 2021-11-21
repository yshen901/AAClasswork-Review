import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="todo-list">
        <ul>
          { this.props.todos.map((todo, idx) => (
            <TodoListItem 
              key={idx}
              todo={todo}
              removeTodo={this.props.removeTodo}
              receiveTodo={this.props.receiveTodo}></TodoListItem>
          ))}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}></TodoForm>
      </div>
    );
  }
}