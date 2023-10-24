import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../SocketContext";

const MyPlayer = ({ audioOn, setVideoCompRendered }) => {
    // const myVideo = useRef();
    // const userVideo = useRef();
    const [firstRender, setFirstRender] = useState(true);
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    console.log(name, callAccepted, myVideo, userVideo, callEnded, stream, call, "in myVideo comp");


    useEffect(() => {

        const videoEl = document.getElementById('myVideo');

        if (!firstRender) {

            if (videoEl.muted) {
                // If audio is muted, unmute it
                videoEl.muted = false;
            } else {
                // If audio is unmuted, mute it
                videoEl.muted = true;
            }

        } else {
            setFirstRender(false)
            setVideoCompRendered(true)
        }



    }, [audioOn])

    useEffect(() => {
        if (callAccepted && !callEnded) {
            document.getElementById('myVideo').classList.remove('vid');
            document.getElementById('myVideo').classList.add('myVidTile');
            document.getElementById('myVideoDiv').classList.add('myVid');
        }
    }, [callAccepted])

    return (

        <div className="row-span-1 col-start-2 col-end-13 md:col-start-1 md:col-end-13 px-5 " id="myVideoDiv">
            <div className="w-full">
                <video
                    playsInline
                    ref={myVideo}
                    autoPlay
                    id="myVideo"
                    className="vid"
                    poster='https://video-chat-app-rho.vercel.app/videoOff.png'
                />
            </div>
        </div>

    );
};
export default MyPlayer;
