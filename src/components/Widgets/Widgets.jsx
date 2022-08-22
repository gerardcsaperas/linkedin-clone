import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import CircleIcon from "@mui/icons-material/Circle";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <CircleIcon className="widgets__blueDot" />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Gerard is launching a new React course",
        "Top news - 9099 readers"
      )}
      {newsArticle(
        "Looking for a job in Japan?",
        "International news - 2014 readers"
      )}
      {newsArticle(
        "TailwindCSS to become the next target",
        "Top news - 10229 readers"
      )}
      {newsArticle(
        "Why should you hire me, explained in a landing page",
        "Top news - 21239 readers"
      )}
    </div>
  );
};

export default Widgets;
