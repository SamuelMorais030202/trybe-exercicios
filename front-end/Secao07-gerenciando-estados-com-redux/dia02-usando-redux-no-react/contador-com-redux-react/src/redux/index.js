import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

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

const store = createStore(reducer, composeWithDevTools());

export default store;