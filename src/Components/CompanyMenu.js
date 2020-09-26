import React from "react";
import CompanyData from "../Data/Companies.json";
import MenuOption from "./MenuOption";

function CompanyMenu() {
  return (
    <div className="companyMenu">
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
