import { ADD_TEXT, UPDATE_TEXT, DELETE_TEXT } from './actions';

const initialState = {
  texts: [],
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        texts: [...state.texts, action.payload],
      };
    case UPDATE_TEXT:
      return {
        ...state,
        texts: state.texts.map(text =>
          text.id === action.payload.id
            ? { ...text, ...action.payload.updates }
            : text
        ),
      };
    case DELETE_TEXT:
      return {
        ...state,
        texts: state.texts.filter(text => text.id !== action.payload),
      };
    default:
      return state;
  }
};

export default textReducer;
