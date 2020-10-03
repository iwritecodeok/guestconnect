import React, { useState } from "react";
import Template from "../Data/Templates.json";
import "../Styles/Chat.scss";

function TemplateSelect({
  id,
  firstName,
  room,
  greeting,
  company,
  companyWeb,
}) {
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState("");

  String.prototype.interpolate = function (templatedetails) {
    const names = Object.keys(templatedetails);
    const vals = Object.values(templatedetails);
    return new Function(...names, `return \`${this}\`;`)(...vals);
  };

  return (
    <div>
      <form>
        {Template.map((template) => (
          <div className=" chatOptions__radio" key={template.id}>
            <label>
              <input
                type="radio"
                value={template.id}
                onChange={(e) => setChecked(e.target?.value)}
                checked={checked === template.id}
              />
              <div className="chatOptions__info">
                <h3>{template.title}</h3>
                {template ? (
                  <p>
                    {template.message.interpolate({
                      firstName: firstName,
                      roomNumber: room,
                      greeting: greeting,
                      company: company,
                      companyWeb: companyWeb,
                    })}
                  </p>
                ) : (
                  <p> uh oh! </p>
                )}
              </div>
            </label>
          </div>
        ))}
        <div className="chatOptions__custom">
          <h3>Custom response</h3>
          <input
            className="custom__input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            checked={checked === { input }}
          />
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

export default TemplateSelect;
