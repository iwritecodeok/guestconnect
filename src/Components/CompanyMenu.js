import React from "react";
import CompanyData from "../Data/Companies.json";
import MenuOption from "./MenuOption";
import "../Styles/GuestMenu.scss";

function CompanyMenu() {
  return (
    <div className="guestMenu">
      <h3>Hotel Partners</h3>
      <hr />
      {CompanyData.map((company) => (
        <MenuOption
          key={company.id}
          id={company.id}
          company={company.company}
          city={company.city}
          timezone={company.timezone}
        />
      ))}
    </div>
  );
}

export default CompanyMenu;
