import React, { useContext, useState } from "react";
import CopyToClipboard, { copyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
import { MdAddCall, MdCallEnd } from 'react-icons/md';
import { FaVideo, FaVideoSlash } from 'react-icons/fa6';
import { BsFillMicFill, BsFillMicMuteFill, BsThreeDotsVertical } from 'react-icons/bs';
import './options.css';


const Options = (props) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
        useContext(SocketContext);
    const [idToCall, setIdToCall] = useState("");

    return (
        <div className="flex justify-between z-5 border-6 rounded w-4/12 sm:w-5/12 md:w-3/12 mx-auto border-white bg-white my-5 px-10 py-3 shadow-lg shadow-black">

            {props.videoOn ? <FaVideo className="btn" onClick={() => props.toggleVideo()} /> : <FaVideoSlash className="btn" onClick={() => props.toggleVideo()} />}
            {props.audioOn ? <BsFillMicFill className="btn" onClick={() => props.setAudioOn(false)} /> : <BsFillMicMuteFill className="btn" onClick={() => props.setAudioOn(true)} />}
            {/* <BsThreeDotsVertical className="btn" /> */}
            {callAccepted && !callEnded ? <MdCallEnd className="endCall" onClick={leaveCall} /> : <MdAddCall className="btn" onClick={() => props.setOpenModal(true)} />}

        </div>
    );
};
export default Options;
