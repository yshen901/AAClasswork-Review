import { connect } from 'react-redux';
import TodoList from "./todo_list";

import { allTodos } from "../../reducers/selectors";
import { receiveTodo, removeTodo, fetchTodos, createTodo } from "../../actions/todo_actions";

const mapStateToProps = (state, ownProps) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)), // no longer needed
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList);