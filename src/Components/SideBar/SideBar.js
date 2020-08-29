import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutLineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "@material-ui/core/Button";

import "./SideBar.css";
import SideBarOptions from "./SideBarOptions/SideBarOptions";

function SideBar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon" />
      {/* Multiple sidebar options */}
      <SideBarOptions active Icon={HomeIcon} text="Home" />
      <SideBarOptions Icon={SearchIcon} text="Explore" />
      <SideBarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      <SideBarOptions Icon={MailOutLineIcon} text="Messages" />
      <SideBarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SideBarOptions Icon={ListAltIcon} text="Lists" />
      <SideBarOptions Icon={PermIdentityIcon} text="Profile" />
      <SideBarOptions Icon={MoreHorizIcon} text="More" />
      {/* Button for tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default SideBar;
