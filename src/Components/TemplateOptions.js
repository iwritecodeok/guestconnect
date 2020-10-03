import React, { useState } from "react";
import Template from "../Data/Templates.json";
import "../Styles/Chat.scss";
import CustomInput from "./CustomInput";

function TemplateOptions({
  id,
  firstName,
  room,
  greeting,
  company,
  companyWeb,
}) {
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
            <input
              type="radio"
              value={template.title}
              onChange={(e) => setChecked(e.target?.value)}
              checked={checked === template.title}
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
          </div>
        ))}
        <CustomInput />
      </form>
      {checked ? <button>send message</button> : <p>please make a selection</p>}
    </div>
  );
}

export default TemplateOptions;
