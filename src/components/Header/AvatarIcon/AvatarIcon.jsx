import React from "react";
import { Avatar } from "@mui/material";
import "./AvatarIcon.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AvatarIcon = ({ avatar }) => {
  return (
    <div className="avatarIcon">
      {avatar && <Avatar className="avatarIcon__avatar" src={avatar} />}
      <div className="avatarIcon__title">
        <h3>Me</h3>
        <ArrowDropDownIcon className="avatarIcon__arrowDown"></ArrowDropDownIcon>
      </div>
    </div>
  );
};

export default AvatarIcon;
