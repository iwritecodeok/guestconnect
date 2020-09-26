export const initialState = {
  guest: [],
  hotel: [],
  sent: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_GUEST":
      return {
        ...state,
        guest: [action.guest],
      };
    case "ADD_HOTEL":
      return {
        ...state,
        hotel: [action.hotel],
      };
    case "SEND_MESSAGE":
      return {
        ...state,
        sent: [...state.sent, action.message],
      };
    default:
      return state;
  }
};
export default reducer;
