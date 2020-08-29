import React from "react";

import "./SideBarOptions.css";

function SideBarOptions({ text, Icon, active }) {
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SideBarOptions;
