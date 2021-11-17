import React from 'react';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='step-list-item'>
          {this.props.step.title}
      </li>
    )
  }
}