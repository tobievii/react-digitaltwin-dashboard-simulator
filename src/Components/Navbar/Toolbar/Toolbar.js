import React from "react";
import DrawerButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar-logo">
          <a href="/">HVAC</a>
        </div>
        <div className="separator" />
        <div className="toolbar-navigation-items">
          <ul>
            <li>
              <a href="/">Device Status</a>
            </li>
            <li>
              <a href="/">Data Chart</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
