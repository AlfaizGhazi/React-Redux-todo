import { combineReducers } from "redux";
import isDarkMode from "./darkModeReducer";
import todoState from "./todoReducer";

const rootReducer = combineReducers({
  isDarkMode,
  todoState,
});

export default rootReducer;
