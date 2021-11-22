import { connect } from "react-redux";
import StepListItem from "./step_list_item";

import {
  receiveStep, 
  removeStep,
  deleteStep,
  updateStep
} from "../../actions/steps_actions";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)),  //deprecated
  removeStep: (step) => dispatch(removeStep(step)),
  deleteStep: (step) => dispatch(deleteStep(step)),
  updateStep: step => dispatch(updateStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepListItem);