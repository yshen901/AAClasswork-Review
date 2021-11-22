import { connect } from 'react-redux';
import TodoList from "./todo_list";

import { allTodos, allErrors } from "../../reducers/selectors";
import { receiveTodo, removeTodo, fetchTodos, createTodo, updateTodo, deleteTodo } from "../../actions/todo_actions";
import { receiveError, clearErrors } from "../../actions/errors_actions"

const mapStateToProps = (state, ownProps) => ({
  todos: allTodos(state),
  errors: allErrors(state),
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)), // no longer needed
  removeTodo: (todo) => dispatch(removeTodo(todo)),

  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),

  clearErrors: () => dispatch(clearErrors()),
  receiveError: (error) => dispatch(receiveError(error))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList);