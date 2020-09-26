// state data layer
// we need this to keep track of basket

import React, { createContext, useContext, useReducer } from "react";
// this is the data layer
export const StateContext = createContext();

//build a provider to give app access to data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how to use it within the component
export const useStateValue = () => useContext(StateContext);
