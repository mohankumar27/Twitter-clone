import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";

import "./TweetBox.css";
import Joker from "../../../assets/images/joker.jpg";
import db from "../../../Firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      displayName: "Mohan Kumar",
      userName: "@mohankumar",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://n1.sdlcdn.com/imgs/a/8/g/Shopmantra-Multicolour-Joker-Minimal-Black-SDL373023554-1-8a96c.jpg",
    });
    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar alt="Joker" src={Joker} variant="rounded" />
          <input
            onChange={(event) => setTweetMessage(event.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(event) => setTweetImage(event.target.value)}
          className="tweetBox__inputImage"
          placeholder="Enter image url"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
