import { ACTION_TYPES } from "../../Constants";

export const darkModeAction = () => {
  return {
    type: ACTION_TYPES.DARK_MODE,
  };
};

export const addTodoAction = (data) => {
  return {
    type: ACTION_TYPES.TODO.ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodoAction = (deleteID) => {
  return {
    type: ACTION_TYPES.TODO.DELETE_TODO,
    payload: { deleteID: deleteID },
  };
};

export const removeAllTodoAction = () => {
  return {
    type: ACTION_TYPES.TODO.REMOVE_ALL_TODO,
  };
};

export const editTodoAction = (editID) => {
  return {
    type: ACTION_TYPES.TODO.EDIT_TODO,
    payload: { editID: editID },
  };
};
