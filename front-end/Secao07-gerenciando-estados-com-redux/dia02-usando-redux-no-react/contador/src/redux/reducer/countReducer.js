const INITIAL_STATE = { count: 0 };
const INCREMENT = 'INCREMENTAR';
const DECREMENT = 'DECREMENTAR';

const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        count: state.count - 1,
      }
    default:
      break;
  }
}

export default countReducer;