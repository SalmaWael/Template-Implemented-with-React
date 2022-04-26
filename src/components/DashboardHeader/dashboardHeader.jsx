import React, { useState } from "react";

import "./dashboardheader.css";

const DashboardHeader = ({ title, icon, text, children, color, bgcolor }) => {
  const iconName = icon;

  const [clicked, setClicked] = useState(false);

  return (
    <div onClick={() => setClicked(!clicked)}>
      <li id="firstLi" className="sidebarLi">
        <div id="dashbordH">
          <div id="dashbordTrans">
            <div>
              <i className={iconName}></i>
            </div>
            <div>
              <span className="dashbordS">{title}</span>
            </div>
          </div>
          <div>
            <span
              id="dashbordS2"
              style={{ color: `${color}`, backgroundColor: `${bgcolor}` }}
            >
              {text}
            </span>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </li>
      {children && clicked && (
        <div className="">
          {children.map((child) => (
            <li className="SideBarHAppLiChildren" key={child}>
              {child}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
