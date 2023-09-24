import React, { useContext, useRef } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  // const myVideo = useRef();
  // const userVideo = useRef();

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  console.log(call, "call in video comp");
  return (
    <div>
      <h1>VideoPlayer</h1>

      <div className="grid md:grid-cols-12 grid-rows-2 md:grid-rows-1 grid-cols-12 mx-auto">
        {" "}
        {/*our video*/}
        {stream && (
          <div className=" border-4 border-white rounded row-span-1 col-start-2 col-end-12 md:col-start-2 md:col-end-6 bg-white my-5">
            <div className="w-full">
              <p className="text-lg text-center py-1 font-semibold">
                {name || "Name"}
              </p>
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className=""
                controls
              />
            </div>
          </div>
        )}
        {/*remote peer's video*/}
        {callAccepted && !callEnded && (
          <div className="border-4 rounded border-white row-span-1 col-start-2 col-end-12 md:col-span-5 md:col-start-7 md:col-end-11 bg-white my-5">
            <div className="w-full">
              <p className="text-lg text-center py-1 font-semibold">
                {call.name || "Name"}
                {/* Someone */}
              </p>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className=""
                controls
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default VideoPlayer;
