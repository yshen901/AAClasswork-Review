import React from "react";
import TodoDetailViewContainer from "./todo_detail_view_container";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };

    this.toggleTodo = this.toggleTodo.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();

    let todo = Object.assign({}, this.props.todo); //toggles done status
    todo.done = !todo.done;
    this.props.updateTodo(todo);
  }

  toggleDetails(e) {
    e.preventDefault();
    this.setState({showDetails: !this.state.showDetails});
  }

  deleteTodo(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  }

  render() {
    let toggleText = "Done";
    if (this.props.todo.done) //button text
      toggleText = "Undo";

    return (
      <li className="todo-list-item">
        <div className="todo-list-item-summary">
          {this.props.todo.title}: {this.props.todo.body}
          <button onClick={this.toggleTodo}>{toggleText}</button>
          <button 
            className="todo-list-item-remove" 
            onClick={this.deleteTodo}>Delete</button>
          <button 
            className="todo-list-details-toggle"
            onClick={this.toggleDetails}>Details</button>
        </div>
        <TodoDetailViewContainer 
          show={this.state.showDetails} 
          todoId={this.props.todo.id} 
          tags={this.props.todo.tags}></TodoDetailViewContainer>
      </li>
    ) 
  }
}