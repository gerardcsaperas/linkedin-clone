import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__background-img"
          src="https://images.unsplash.com/photo-1554189097-ffe88e998a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />

        <div className="sidebar__user">
          <h2 className="sidebar__username">Gerard Castrelo Saperas</h2>
          <h3 className="sidebar__user-headline">Fullstack Developer</h3>
          <h3 className="sidebar__user-headline">gcsaperas@gmail.com</h3>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who's viewed your profile</p>
            <p className="sidebar__statNumber">135</p>
          </div>
          <div className="sidebar__stat">
            <p>Impressions of your post</p>
            <p className="sidebar__statNumber">202</p>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p className="sidebar__bottomTitle">Recent</p>
        {recentItem("reactjs")}
        {recentItem("redux")}
        {recentItem("programming")}
        {recentItem("japan")}
        {recentItem("tokyo")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
