import React, { useEffect, useContext, useRef } from "react";
import { SocketContext } from "../SocketContext";
import MyPlayer from "./videoComps/MyVideo";
import YourPlayer from "./videoComps/Yourvideo";

const VideoPlayer = ({ videoOn, audioOn, setVideoCompRendered }) => {
  // const myVideo = useRef();
  // const userVideo = useRef();

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);




  return (
    <div>
      <div className="grid md:grid-cols-12 grid-cols-12 mx-auto pt-2">
        {" "}
        {/*our video*/}
        {callAccepted && !callEnded && (
          <YourPlayer />
        )}
        {/*remote peer's video*/}
        {stream && (
          <MyPlayer audioOn={audioOn} setVideoCompRendered={setVideoCompRendered} />
        )}
      </div>
    </div>
  );
};
export default VideoPlayer;
