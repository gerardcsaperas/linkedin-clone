import React from "react";
import "./HeaderIcon.css";

const HeaderIcon = ({ title, Icon, route }) => {
  return (
    <div className="headerIcon">
      {Icon && <Icon className="headerIcon__icon" />}
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderIcon;
