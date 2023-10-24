import { useContext } from "react";
import { SocketContext } from "../../SocketContext";
import { FaVideoSlash } from 'react-icons/fa6';
import './videoCompcss.css';


const YourPlayer = () => {
  // const myVideo = useRef();
  // const userVideo = useRef();

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


  return (
    <div className="row-span-1 col-start-2 col-end-13 md:col-start-1 md:col-end-13 px-5">
      <div className="w-full">
        {/* <p className="text-lg text-center py-1 font-semibold">
          your Player
        </p> */}
        <video
          playsInline
          muted
          ref={userVideo}
          autoPlay
          className="vid"
          poster='https://images.unsplash.com/photo-1628260412297-a3377e45006f'
        // controls
        />
      </div>
    </div>
  );
};
export default YourPlayer;
