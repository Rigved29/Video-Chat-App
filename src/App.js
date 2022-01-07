import React from "react";
import "./App.css";
import Videoplayer from "./components/Videoplayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <div>
      <h1 className="App text-3xl text-white font-bold">Video Chat APP</h1>
      <Videoplayer />
      <Options />
      <Notifications />
    </div>
  );
};
export default App;
