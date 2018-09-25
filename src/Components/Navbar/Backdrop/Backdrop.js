import React from "react";
import "./Backdrop.css";

const backDropContainer = props => {
  return <div className="backdrop" onClick={props.click} />;
};

export default backDropContainer;
