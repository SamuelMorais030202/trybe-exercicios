import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = { counter: 0 };

const reducer = (state = INITIAL_STATE, action) => {

  return state;
}

const store = createStore(reducer, composeWithDevTools());

export default store;