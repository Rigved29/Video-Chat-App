import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import Videoplayer from "./components/Videoplayer";
import CallModal from "./components/CallModal";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import { SocketContext } from "./SocketContext";

const App = () => {
  const [image, setImage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  const [audioOn, setAudioOn] = useState(true);
  const [videoCompRendered, setVideoCompRendered] = useState(false);

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  useEffect(() => {
    if (callAccepted) {
      setOpenModal(false);
    }
  }, [callAccepted])

  const toggleVideo = () => {
    // Check if the video is currently on
    if (myVideo.current?.srcObject) {
      // If video is on, stop the stream
      const stream = myVideo.current.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });

      myVideo.current.srcObject = null;
      // toggleVideoButton.textContent = 'Turn On Video';
      setVideoOn(false)
    } else {
      // If video is off, request access to the user's camera and start the video stream
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          myVideo.current.srcObject = stream;
          // toggleVideoButton.textContent = 'Turn Off Video';
          setVideoOn(true);
        })
        .catch((error) => {
          console.error('Error accessing the camera:', error);
        });
    }

  }

  return (
    <div className="parentDiv overflow-hidden">
      <h1 className="App text-3xl text-white font-bold">Video Chat APP</h1>
      <Videoplayer videoOn={videoOn} audioOn={audioOn} setVideoCompRendered={setVideoCompRendered} />
      {videoCompRendered &&
        <>
          <Options setOpenModal={setOpenModal} toggleVideo={toggleVideo} videoOn={videoOn} setAudioOn={setAudioOn} audioOn={audioOn} />
          <Notifications />
          <CallModal openModal={openModal} setOpenModal={setOpenModal} />
        </>}
    </div>
  );
};
export default App;
