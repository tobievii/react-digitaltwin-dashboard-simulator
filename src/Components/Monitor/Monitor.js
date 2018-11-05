import React from "react";
import Clock from "./Clock";
import Status from "./Status";
import DeviceDetails from "./DeviceDetails";
import Telemetry from "./Telemetry/Telemetry";
import "./Monitor.css";

const Monitor = props => {
  return (
    <div className="monitor-master">
      <Clock />
      <Status />
      <DeviceDetails />
      <Telemetry t={props.tempV} h={props.humidV} w={props.windV} />
    </div>
  );
};

export default Monitor;
