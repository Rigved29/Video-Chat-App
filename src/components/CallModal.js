import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
import { IoCopy } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai'
import './callModal.css';

const CallModal = (props) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className={`z-5 w-1/3 text-white rounded-3xl  mx-auto border-white bg-white my-10 callModalDiv ${props.openModal ? 'callModalDivOpen' : 'callModalDivClose'}`}>
      <div className="flex justify-between p-6">
        <p className="mt-2">Call Your Friend</p>
        <div className="bg-white rounded-2xl p-2" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
          <AiOutlineClose className="cursor-pointer z-10 text-white" onClick={() => props.setOpenModal(false)} />
        </div>
      </div>
      <hr />
      <div className="flex justify-between flex-col mx-auto mt-10 gap-x-12 items-center gap-4 w-full p-6">
        <div className="flex w-full">
          {/* <p className="text-lg font-semibold">Share your ID</p> */}
          {/* <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="outline-none border-b-2 border-black rounded py-1 px-2"
          /> */}
          <CopyToClipboard
            text={me}
            className="bg-[#5E3BC3] text-white py-2 px-2 rounded-lg w-full"
          >
            <button className=" text-white  rounded  px-2 w-full">Copy Your Id and Share </button>

          </CopyToClipboard>
        </div>
        <div className="w-full">
          <p className="text-center font-semibold">OR</p>
        </div>
        <div className="flex flex-col w-full">
          {/* <p className="text-lg font-semibold text-center">Make a call</p> */}
          <input
            type="text"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            placeholder="ID to Call"
            className="outline-none border-b-2 border-black rounded-lg py-2 px-2 bg-[#0e0b12]"
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
              className="bg-[#5E3BC3] text-white  my-3 rounded-lg py-2 px-2"
              onClick={() => {
                callUser(idToCall)
                props.setOpenModal(false)
              }
              }
            >
              Make a call
            </button>
          )}
        </div>
      </div>
      {/* <div>{props.children}</div> */}
    </div>
  );
};
export default CallModal;
