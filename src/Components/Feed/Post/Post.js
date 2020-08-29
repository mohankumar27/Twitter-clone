import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavouriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

const Post = forwardRef(
  ({ displayName, userName, verfied, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} alt="Joker" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post_headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verfied && <VerifiedUserIcon className="post__badge" />}{" "}
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img alt="" src={image} />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavouriteIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
