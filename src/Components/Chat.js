import React from "react";
import { useStateValue } from "../Contexts/StateProvider";
import "../Styles/Chat.scss";
import ChatOptions from "./ChatOptions";
import "../Styles/Chat.scss";
function Chat() {
  const [{ guest, hotel }] = useStateValue();

  return (
    <div className="chat">
      <div className="chat__container">
        {/* rendering of chatOptions is conditional, if no guest in state will show select guest  */}
        {!guest[0] ? (
          <p>Please select a guest</p>
        ) : !hotel[0] && guest[0] ? (
          <div className="chat__hotel">
            <p> {`Where is ${guest[0].firstName} staying?`}</p>
          </div>
        ) : (
          <div className="chat__selection">
            <ChatOptions />
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
