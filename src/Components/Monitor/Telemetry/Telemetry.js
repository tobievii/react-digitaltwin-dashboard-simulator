import React from "react";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";
import "./Telemetry.css";

const telemetry = props => {
  return (
    <div className="telemetry-master">
      <Temperature temperature={props.t} />
      <Humidity humidity={props.h} />
      <WindSpeed windspeed={props.w} />
    </div>
  );
};

export default telemetry;
