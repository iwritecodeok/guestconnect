import React from "react";
import { useStateValue } from "../Contexts/StateProvider";

function Chat() {
  const [{ guest, hotel }] = useStateValue();

  console.log("HERE", guest, hotel);
  const greeting = getGreeting();
  function getGreeting() {
    let today = new Date();
    let hours = today.getHours();

    if (hours > 5 && hours < 12) {
      return "morning";
    } else if (hours >= 12 && hours < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  return (
    <div className="chat">
      <div className="chat__container">
        {!guest[0] ? (
          <p>Please select a guest</p>
        ) : (
          <p>
            {`Good ${greeting} ${guest[0]?.firstName}, and welcome to ${hotel[0]?.company}! 
          Room ${guest[0]?.roomNumber}`}{" "}
            is now ready for you.
          </p>
        )}
      </div>
    </div>
  );
}

export default Chat;
// "Good morning Ethan, and welcome to Hotel California! Room 304 is now ready you. Enjoy your stay, and let us know if you
// need anything."
