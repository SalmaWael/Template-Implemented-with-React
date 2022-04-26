import React, { useState } from "react";

import "./sideBarLi.css";

const SideBarLi = ({ title, icon, children }) => {
  const iconName = icon;
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div
        className={` ${iconName ? "SideBarAppLi" : ""}`}
        onClick={() => setClicked(!clicked)}
      >
        <div className="SidebarAppFlex">
          <div>
            <i id="SideBarAppI" className={iconName}></i>
            <span className="dashbordS">{title}</span>
          </div>
          <div>
            {children && (
              <button className="arrowBtn">
                {clicked ? (
                  <i className="fa-solid fa-angle-down"></i>
                ) : (
                  <i className="fa-solid fa-angle-right"></i>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      {children && clicked && (
        <div className="">
          {children.map((child) => (
            <li
              onClick={() => setSelected(!selected)}
              className={` ${
                iconName ? "SideBarAppLiChildren" : "customSideBarAppLiChildren"
              }`}
              // className="SideBarAppLiChildren"
              // className={`${selected} ? 'SideBarAppLiChildrenSelected' : 'SideBarAppLiChildren'`}
              key={child}
            >
              {child}
            </li>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarLi;

// import React from "react";

// import "./sideBarLi.css";

// const SideBarLi = ({ title, icon, children }) => {
//   const iconName = icon;
//   return (
//     <div className="SideBarAppLi">
//       <i id="SideBarAppI" className={iconName}></i>
//       <span className="dashbordS">{title}</span>
//       <span>{children}</span>
//     </div>
//   );
// };

// export default SideBarLi;
