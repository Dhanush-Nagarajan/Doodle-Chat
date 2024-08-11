// src/store/reducers/index.js
import { combineReducers } from 'redux';
import conversationReducer from './conversationReducer';

const rootReducer = combineReducers({
  conversation: conversationReducer,
  // other reducers can be added here
});

export default rootReducer;
