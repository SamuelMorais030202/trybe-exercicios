import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import countReducer from './reducer/countReducer';

const store = createStore(countReducer, composeWithDevTools());

export default store;