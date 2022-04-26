import React from "react";

import "./notification.css";

const Notification = ({ img, title, text, imgContent, color, bgColor }) => {
  return (
    <div className="notificationCell">
      <div>
        {img ? (
          <img className="notificationCellImg" src={img}></img>
        ) : (
          <div
            style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
            className="notificationCellImgContent"
          >
            {imgContent}
          </div>
        )}
      </div>
      <div>
        <p className="notificationCellP">{title}</p>
        <small className="notificationCellT">{text}</small>
      </div>
    </div>
  );
};

export default Notification;
