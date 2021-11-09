import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div className="widget">
        <h1 className="widget-title">Clock</h1>
        <h4 id="clock">{ this.state.time.toTimeString() }</h4>
      </div>
    );
  }
  
}