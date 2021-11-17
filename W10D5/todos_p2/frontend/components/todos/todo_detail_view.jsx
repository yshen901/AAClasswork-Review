import React from 'react';

export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = "";
    if (this.props.show)
      content = "Put content here";

    return (
      <div className="todo-detailed-view">
        {content}
      </div>
    );
  }
}