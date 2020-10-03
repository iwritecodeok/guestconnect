import React, { useState } from "react";
import "../Styles/Chat.scss";
function CustomInput() {
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState("");
  return (
    <div className="chatOptions__custom">
      <h3>Custom response</h3>
      <input
        type="radio"
        value="custom"
        onChange={(e) => setChecked(e.target?.value)}
        checked={checked === "custom"}
      />
      <input
        className="custom__input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        checked={checked === "custom"}
      />
    </div>
  );
}

export default CustomInput;
