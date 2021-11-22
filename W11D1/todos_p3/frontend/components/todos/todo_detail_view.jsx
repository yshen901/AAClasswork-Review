import React from 'react';
import StepListItemContainer from "../steps_list/step_list_item_container";
import StepForm from "../steps_list/step_form";

export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSteps() {
    if (!this.props.show)
      return "";

    return (
      <div className="todo-detail-view">
        <ul className='todo-item-steps-list'>
          {this.props.steps.map((step, idx) => (
            <StepListItemContainer key={idx} step={step}></StepListItemContainer>
          ))}
          <StepForm createStep={this.props.createStep} todoId={this.props.todoId}></StepForm>
        </ul>
      </div>
    );
  }

  render() {
    return this.renderSteps();
  }
}