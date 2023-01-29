import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './reducers/counterReducer';

const store = createStore(reducer, composeWithDevTools());

export default store;