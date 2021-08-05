import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import commentsActions from './comments-actions';

const items = createReducer([], {
  [commentsActions.addComment]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  items
});
