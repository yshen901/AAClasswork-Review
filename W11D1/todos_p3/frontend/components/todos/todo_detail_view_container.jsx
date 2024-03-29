import { connect } from "react-redux";
import TodoDetailView from "./todo_detail_view";

import { todoSteps } from "../../reducers/selectors";
import { receiveStep, createStep } from "../../actions/steps_actions";

const mapStateToProps = (state, ownProps) => ({
  steps: todoSteps(state, ownProps.todoId)
});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)), // deprecated
  createStep: (step) => dispatch(createStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoDetailView);