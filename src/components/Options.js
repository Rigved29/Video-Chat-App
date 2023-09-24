import React, { useContext, useState } from "react";
import CopyToClipboard, { copyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

const Options = (props) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="z-5 border-4 rounded w-11/12 sm:w-8/12 mx-auto border-white bg-white my-10">
      <div className="grid grid-rows-2 grid-cols-12 md:grid-rows-1 mx-auto">
        <div className="md:col-start-2 md:col-end-6 col-start-2 col-end-12 grid">
          <p className="text-lg font-semibold">Account Info</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="outline-none border-b-2 border-black rounded py-1 px-2"
          />
          <CopyToClipboard
            text={me}
            className="bg-blue-500 text-white my-3 py-1 rounded"
          >
            <button className=" text-white  rounded  px-2">Copy Your ID</button>
          </CopyToClipboard>
        </div>
        <div className="md:col-start-7 md:col-end-11 col-start-2 col-end-12 grid">
          <p className="text-lg font-semibold">Make a call</p>
          <input
            type="text"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            placeholder="ID to Call"
            className="outline-none border-b-2 border-black rounded py-1 px-2"
          />
          {callAccepted && !callEnded ? (
            <button
              className="bg-red-500 text-white my-3 rounded py-1 px-2"
              onClick={leaveCall}
            >
              Hang Up
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white  my-3 rounded py-1 px-2"
              onClick={() => callUser(idToCall)}
            >
              Call
            </button>
          )}
        </div>
      </div>
      {/* <div>{props.children}</div> */}
    </div>
  );
};
export default Options;
