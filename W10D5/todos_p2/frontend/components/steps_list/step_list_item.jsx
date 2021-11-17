import React from 'react';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeStep(this.props.step);
  }

  handleToggle(e) {
    e.preventDefault();
    
    let newStep = Object.assign({}, this.props.step);
    newStep.done = !newStep.done;
    this.props.receiveStep(newStep);
  }

  render() {
    let toggleStatus = "Done";
    if (this.props.step.done)
      toggleStatus = "Undo";
    return (
      <li className='step-list-item'>
        {this.props.step.title}: {this.props.step.body}
        <button onClick={this.handleToggle}>{toggleStatus}</button>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }
}