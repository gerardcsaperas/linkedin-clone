import React from "react";
import { Avatar } from "@mui/material";
import "./AvatarIcon.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
import { selectUser } from "../../../reducers/userSlice";

const AvatarIcon = () => {
  const user = useSelector(selectUser);

  return (
    <div className="avatarIcon">
      <Avatar
        className="avatarIcon__avatar"
        src={user?.photoURL || user?.email[0]}
      />
      <div className="avatarIcon__title">
        <h3>Me</h3>
        <ArrowDropDownIcon className="avatarIcon__arrowDown"></ArrowDropDownIcon>
      </div>
    </div>
  );
};

export default AvatarIcon;
