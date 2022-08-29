import React from "react";
import "./Header.css";
import LinkedinIcon from "../../assets/linkedin-icon.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderIcon from "./HeaderIcon/HeaderIcon";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AvatarIcon from "./AvatarIcon/AvatarIcon";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/userSlice";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    const auth = getAuth();
    signOut(auth);
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedinIcon} alt="linkedin icon" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
      </div>

      <div className="header__right">
        <HeaderIcon title="Home" Icon={HomeIcon} />
        <HeaderIcon title="My Network" Icon={PeopleIcon} />
        <HeaderIcon title="Jobs" Icon={WorkIcon} />
        <HeaderIcon title="Messaging" Icon={SmsIcon} />
        <HeaderIcon title="Notifications" Icon={NotificationsIcon} />
        <AvatarIcon onClick={logoutUser}/>
      </div>
    </div>
  );
};

export default Header;
