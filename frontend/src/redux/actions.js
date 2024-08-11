// src/store/actions.js
import { SET_SELECTED_CONVERSATION, SET_MESSAGES } from './actionTypes';

export const setSelectedConversation = (selectedConversation) => ({
    type: SET_SELECTED_CONVERSATION,
    payload: selectedConversation,
});

export const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages,
});
