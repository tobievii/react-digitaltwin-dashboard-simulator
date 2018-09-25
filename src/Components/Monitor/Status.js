import React, { Component } from "react";
import PowerButton from "./PowerButton";
import "./Status.css";

class Status extends Component {
  state = {
    active: true
  };
  render() {
    return (
      <div className="status-master">
        <div className="status-text">
          <p className="status">STATUS</p>
          <span className="power-button">
            <PowerButton />
          </span>
        </div>
      </div>
    );
  }
}

export default Status;
