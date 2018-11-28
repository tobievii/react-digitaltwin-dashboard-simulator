import React from "react";
import Mesh from "./Telemetry/client";
import "./DeviceDetails.css";

const deviceDetails = props => {
  const dHashedValue = props.hexBrkr + Mesh + props.hexHash;
  return (
    <div className="device-info-header">
      <hr className="horizontal-line-below-status" />
      <span className="device-name">Air Handler Unit - Building ITC </span>
      <br /> <br />
      <span className="device-id">{dHashedValue}</span>
    </div>
  );
};

export default deviceDetails;
