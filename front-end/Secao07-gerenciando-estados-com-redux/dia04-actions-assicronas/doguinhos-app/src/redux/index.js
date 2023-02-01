import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import moviesReducer from './reducers/moviesReducer';

const store = createStore(
  moviesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;