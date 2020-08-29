import React from "react";

import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      {/* Left SideBar */}
      <SideBar />
      {/*  Middle Scrollable feed*/}
      <Feed />
      {/* Right Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
