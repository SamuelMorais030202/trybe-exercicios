import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// import counterReducer from './reducers/counterReducer';
import rootReducer from './reducers/index';

// const store = createStore(counterReducer, composeWithDevTools());
const store = createStore(rootReducer, composeWithDevTools());

export default store;