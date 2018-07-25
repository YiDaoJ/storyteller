import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import story from './reducer/story'

const store = createStore(combineReducers({ story }), composeWithDevTools());

export default store