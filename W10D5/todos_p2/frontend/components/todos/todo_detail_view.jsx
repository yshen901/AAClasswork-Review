import React from 'react';

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
          <li className='todo-item-step' key={idx}>
            {step.title}
          </li>
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