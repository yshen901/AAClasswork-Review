import { connect } from "react-redux";
import StepListItem from "./step_list_item";

import {receiveStep, removeStep} from "../../actions/steps_actions";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
  removeStep: (step) => dispatch(removeStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepListItem);