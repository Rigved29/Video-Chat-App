import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);


  return (
    <>

      {call && !callAccepted && (
        <div style={{ position: 'absolute', top: '50%', left: '45%', backgroundColor: '#201b2a', padding: '10px', borderRadius: '10px' }}>
          <div className="mx-auto w-auto flex justify-center">
            <h1 className="text-lg text-white font-semibold mt-2">
              getting call...
            </h1>
            <button
              onClick={answerCall}
              className="bg-[#5E3BC3] text-white px-4 py-1 text-lg font-semibold mx-2 rounded"
            >
              pick up
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Notifications;
