import React from "react";
import { useStateValue } from "../Contexts/StateProvider";
import "../Styles/GuestMenu.scss";

function MenuOption({
  id,
  firstName,
  lastName,
  roomNumber,
  company,
  city,
  timezone,
}) {
  const [{ guest }, dispatch] = useStateValue();

  const addGuest = () => {
    // dispatch to state
    dispatch({
      type: "ADD_GUEST",
      guest: {
        id: id,
        firstName: firstName,
        lastName: lastName,
        roomNumber: roomNumber,
      },
    });
  };

  const addHotel = () => {
    dispatch({
      type: "ADD_HOTEL",
      hotel: {
        id: id,
        company: company,
        city: city,
        timezone: timezone,
      },
    });
  };
  return (
    <div className="menuOption">
      {firstName ? (
        <div className="menuOption__guest" onClick={addGuest}>
          <h3>
            {lastName}, {firstName}
          </h3>
        </div>
      ) : (
        <div className="menuOption">
          <h3>{company}</h3>

          <button className="menuOption" onClick={addHotel}>
            select hotel
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuOption;
