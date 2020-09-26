import React from "react";
import GuestMenu from "./Components/GuestMenu";
import CompanyMenu from "./Components/CompanyMenu";
import Chat from "./Components/Chat";
import "./Styles/App.scss";

function App() {
  return (
    <div className="app">
      {/* select guest  */}
      <div className="app__left">
        <GuestMenu />
        {/* if guest in state show companies */}
        {/* select company */}
        <CompanyMenu />
      </div>
      {/* if company in state show message menu */}
      <Chat />
      {/* display message  :: for value set generated info as the default for the input box*/}
    </div>
  );
}

export default App;
