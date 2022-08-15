import React, { useEffect, useState } from "react";
import "./Feed.css";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption/InputOption";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import Post from "./Post/Post";
import {
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

const Feed = () => {
  const postsCol = collection(db, "posts");

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const q = query(postsCol, orderBy("timestamp", "desc"));
    const postsColSnapshot = await getDocs(q);
    const postList = postsColSnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setPosts(postList);
  }

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(postsCol, {
        username: "Gerard Castrelo Saperas",
        userHighlight: "Fullstack Developer",
        message: input,
        photoUrl: "",
        timestamp: serverTimestamp(),
      });
      getPosts();
      setInput("");
    } catch (e) {
      console.error(
        `Something went wrong saving your LinkedIn post. Error: ${e.message}`
      );
    }
  };

  return (
    <div className="feed">
      <div className="feed_top">
        <div className="feed__inputContainer">
          <Avatar className="feed__inputAvatar" />
          <div className="feed__input">
            <EditIcon />
            <form action="">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={CropOriginalIcon} title="Photo" color="#378ee9" />
          <InputOption Icon={SmartDisplayIcon} title="Video" color="#5f9b41" />
          <InputOption Icon={CalendarMonthIcon} title="Event" color="#c37d17" />
          <InputOption
            Icon={FormatAlignLeftIcon}
            title="Write article"
            color="#e16745"
          />
        </div>
      </div>

      {posts.length > 0 &&
        posts.map(
          ({
            id,
            data: { username, userHighlight, message, photoUrl, timestamp },
          }) => (
            <Post
              key={id}
              username={username}
              userHighlight={userHighlight}
              message={message}
              photoUrl={photoUrl}
              timestamp={timestamp}
            />
          )
        )}
    </div>
  );
};

export default Feed;
