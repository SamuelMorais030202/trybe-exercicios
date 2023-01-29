const INITIAL_STATE = { counter: 0 };

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "INCRMENT_COUNTER":
      return {
        counter: state.counter + action.payload,
      }
    default:
      return state;
  }

}

export default reducer