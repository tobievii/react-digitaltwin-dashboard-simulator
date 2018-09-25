import React, { Component } from "react";
import Clock from "./Clock";
import Status from "./Status";
import DeviceDetails from "./DeviceDetails";
import "./Monitor.css";

class Monitor extends Component {
  render() {
    return (
      <div className="monitor-master">
        <Clock />
        <Status />
        <DeviceDetails />
      </div>
    );
  }
}

export default Monitor;
