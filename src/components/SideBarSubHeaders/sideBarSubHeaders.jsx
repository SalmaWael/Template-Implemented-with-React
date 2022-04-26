import React from "react";

import "./sideBarSubHeaders.css";

const SideBarSubHeaders = ({ title }) => {
  return (
    <>
      <span id="appsSpan">{title}</span>
    </>
  );
};

export default SideBarSubHeaders;
