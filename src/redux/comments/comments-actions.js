import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addComment = createAction('comments/add', (name, text) => ({
  payload: {
    name,
    text,
    id: uuidv4(),
  },
}));

export default addComment ;
