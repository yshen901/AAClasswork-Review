import { connect } from 'react-redux';
import TodoList from "./todo_list";

import { allTodos, allErrors } from "../../reducers/selectors";

import { receiveError, clearErrors } from "../../actions/errors_actions"
import { fetchSteps } from "../../actions/steps_actions";
import { fetchTags } from "../../actions/tag_actions";
import { 
  receiveTodo, 
  removeTodo, 
  fetchTodos, 
  createTodo, 
  updateTodo, 
  deleteTodo 
} from "../../actions/todo_actions";

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

  fetchSteps: () => dispatch(fetchSteps()),

  clearErrors: () => dispatch(clearErrors()),
  receiveError: (error) => dispatch(receiveError(error))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList);