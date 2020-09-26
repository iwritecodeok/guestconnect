export const initialState = {
  guest: [],
  hotel: [],
};

const reducer = (state, action) => {
  console.log(action);
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
    default:
      return state;
  }
};
export default reducer;
