import { ACTION_TYPES } from "../../Constants";

const initialState = false;

const isDarkMode = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.DARK_MODE:
      state = state === false ? true : false;
      return state;
    default:
      return state;
  }
};

export default isDarkMode;
