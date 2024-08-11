// src/store/reducers/conversationReducer.js
import { SET_SELECTED_CONVERSATION, SET_MESSAGES } from '../../redux/actionTypes.js';

const initialState = {
  selectedConversation: null,
  messages: [],
};

const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CONVERSATION:
      return {
        ...state,
        selectedConversation: action.payload,
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default conversationReducer;
