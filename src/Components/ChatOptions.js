import React, { useState } from "react";
import { useStateValue } from "../Contexts/StateProvider";
import "../Styles/Chat.scss";

import TemplateOptions from "./TemplateOptions";

function ChatOptions() {
  const [{ guest, hotel }] = useStateValue();
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
  const webAddress = hotel[0].company.split(" ").join("").toLowerCase();
  // refactor
  // in order to get templates from the backend i need to,
  // 1. pull in template data, break down message and insert values
  // 2. display messages with check boxes for selection

  return (
    <div className="chatOptions">
      <TemplateOptions
        id={guest[0].id}
        firstName={guest[0].firstName}
        room={guest[0].roomNumber}
        greeting={greeting}
        company={hotel[0].company}
        companyWeb={webAddress}
      />
    </div>
  );
}

export default ChatOptions;
