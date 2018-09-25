import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div className="clock-container">
        <div className="clock-header">
          <span className="clock-header-text">DEVICE MONITORING </span>
          <span className="clock">{this.state.time}</span>
          <hr className="horizontal-line" />
        </div>
      </div>
    );
  }
}

export default Clock;
