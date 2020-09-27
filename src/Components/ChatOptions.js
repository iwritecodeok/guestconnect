import React, { useState } from "react";
import { useStateValue } from "../Contexts/StateProvider";
import "../Styles/Chat.scss";

function ChatOptions() {
  const [input, setInput] = useState("");
  const [{ guest, hotel }] = useStateValue();
  const [checked, setChecked] = useState("");
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
    <div className="chatOptions">
      <form>
        <div className=" chatOptions__radio">
          <label>
            <input
              type="radio"
              value="checkIn"
              onChange={(e) => setChecked(e.target?.value)}
              checked={checked === "checkIn"}
            />
            <div className="chatOptions__info">
              <h3>Room is Ready</h3>
              <p>
                {`Good ${greeting} ${guest[0]?.firstName}, and welcome to ${hotel[0]?.company}! 
          Room ${guest[0]?.roomNumber} is now ready for you.`}
              </p>
            </div>
          </label>
        </div>

        <div className="chatOptions__radio">
          <label>
            <input
              type="radio"
              value="fine"
              onChange={(e) => setChecked(e.target?.value)}
              checked={checked === "fine"}
            />
            <div className="chatOptions__info">
              <h3>keeping deposit</h3>
              <p>{`Good ${greeting} ${
                guest[0]?.firstName
              }, we're keeping the safety deposit for room ${
                guest[0]?.roomNumber
              }.
           You can find out more at ${hotel[0]?.company
             .split(" ")
             .join("")
             .toLowerCase()}.com`}</p>
            </div>
          </label>
        </div>
        <div className="chatOptions__radio">
          <label>
            <input
              type="radio"
              value="custom"
              checkedValue={input}
              onChange={(e) => setChecked(e.target.value)}
              checked={checked === "custom"}
            />
            <div className="chatOptions__info">
              <section className="chatOptions__custom">
                <h3>Custom response</h3>
                <input
                  className="custom__input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </section>
            </div>
          </label>
        </div>
        {checked ? (
          <button>send message</button>
        ) : (
          <p>please make a selection</p>
        )}
      </form>
    </div>
  );
}

export default ChatOptions;
