import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
    this.props.fetchSteps();
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
              receiveTodo={this.props.receiveTodo}
              updateTodo={this.props.updateTodo}
              deleteTodo={this.props.deleteTodo}
            ></TodoListItem>
          ))}
        </ul>
        <TodoForm 
          receiveTodo={this.props.receiveTodo} 
          createTodo={this.props.createTodo} 
          clearErrors={this.props.clearErrors}
          receiveError = {this.props.receiveError}
          errors = {this.props.errors}
        ></TodoForm>
      </div>
    );
  }
}