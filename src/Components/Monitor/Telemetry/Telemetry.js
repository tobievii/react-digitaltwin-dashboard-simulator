import React from "react";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";
import "./Telemetry.css";

const telemetry = props => {
  return (
    <div className="telemetry-master">
      <Temperature />
      <Humidity />
      <WindSpeed />
    </div>
  );
};

export default telemetry;
