export const ADD_TEXT = 'ADD_TEXT';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const DELETE_TEXT = 'DELETE_TEXT';

export const addText = (text) => ({
  type: ADD_TEXT,
  payload: text,
});

export const updateText = (id, updates) => ({
  type: UPDATE_TEXT,
  payload: { id, updates },
});

export const deleteText = (id) => ({
  type: DELETE_TEXT,
  payload: id,
});
