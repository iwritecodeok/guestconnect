import React from "react";
import GuestData from "../Data/Guests.json";
import MenuOption from "./MenuOption";
import "../Styles/GuestMenu.scss";

function GuestMenu() {
  return (
    <div className="guestMenu">
      {/* list of clickable guest objects */}
      {/* map over guestData, on click adds to state */}
      <h3>Guests on file:</h3>
      <hr />
      {GuestData.map((guest) => (
        <MenuOption
          key={guest.id}
          firstName={guest.firstName}
          lastName={guest.lastName}
          roomNumber={guest.reservation.roomNumber}
        />
      ))}
    </div>
  );
}

export default GuestMenu;
