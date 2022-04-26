import React from "react";
import "./sidebar.css";
const SideBar = () => {
  return (
    <div id="sidebar">
      <div>
        <button className="collapsible">Open Collapsible</button>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default SideBar;
