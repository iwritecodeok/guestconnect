import React, { useState, useEffect } from "react";
import { useStateValue } from "../Contexts/StateProvider";

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

  const [guestInfo, setGuestInfo] = useState(null);

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
        <div className="menuOption__guest">
          <h3>
            {id} {lastName}, {firstName}
          </h3>
          <p>Room #: {roomNumber}</p>
          <button onClick={addGuest}>select guest</button>
        </div>
      ) : (
        <div className="menuOption__company">
          <h3>{company}</h3>
          <p>
            Location: {city}, Timezone: {timezone}
          </p>
          <button onClick={addHotel}>select hotel</button>
        </div>
      )}
    </div>
  );
}

export default MenuOption;
