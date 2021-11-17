import React from 'react';
import StepListItemContainer from "../steps_list/step_list_item_container";

export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSteps() {
    if (!this.props.show)
      return "";

      return (
      <ul className='todo-item-steps-list'>
        {this.props.steps.map((step, idx) => (
          <StepListItemContainer key={idx} step={step}></StepListItemContainer>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="todo-detailed-view">
        {this.renderSteps()}
      </div>
    );
  }
}