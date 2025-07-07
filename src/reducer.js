const initialState = {
  result: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "CALCULATE_RESULT":
      return {
        ...state,
        result: action.payload
      };
    default:
      return state;
  }
}

export default reducer;