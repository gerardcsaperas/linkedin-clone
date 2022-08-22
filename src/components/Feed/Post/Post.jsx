import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InputOption from "../InputOption/InputOption";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Post = forwardRef(
  ({ username, userHighlight, message, photoURL }, ref) => {
    if (!username || !message) {
      return null;
    }

    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoURL} />
          <div className="post__info">
            <h2>{username}</h2>
            <p>{userHighlight && userHighlight}</p>
          </div>
        </div>

        <div className="post__body">
          <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOption title="Like" Icon={ThumbUpOffAltIcon} color="gray" />
          <InputOption
            title="Comment"
            Icon={ChatBubbleOutlineIcon}
            color="gray"
          />
          <InputOption title="Share" Icon={IosShareOutlinedIcon} color="gray" />
          <InputOption title="Send" Icon={SendOutlinedIcon} color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
