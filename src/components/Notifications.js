import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  console.log(call);

  return (
    <div>
      {call && !callAccepted && (
        <div className="mx-auto w-10/12 sm:w-4/12 flex justify-center">
          <h1 className="text-white text-lg font-semibold">
            {`${call.name} is calling:` || "Someone"}
          </h1>
          <button
            onClick={answerCall}
            className="bg-blue-500 text-white px-4 py-1 text-lg font-semibold mx-2 rounded"
          >
            Answer
          </button>
        </div>
      )}
    </div>
  );
};
export default Notifications;
