import React, { useEffect, useState } from "react";
import "./App.css";
import Videoplayer from "./components/Videoplayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const App = () => {
  const [image, setImage] = useState("");

  // useEffect(() => {
  //   const getBg = async () => {
  //     const res = await fetch("https://picsum.photos/500/700/?blur");
  //     const img = res.json();
  //   };

  //   setInterval(getBg, 10000);
  // }, []);

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
