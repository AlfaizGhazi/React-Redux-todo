import { ACTION_TYPES } from "../../Constants";

const initialState = {
  list: [],
};

const todoState = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.TODO.ADD_TODO:
      const { id, data } = payload;
      if (data === "") {
        return alert("Please Enter Valid Information!");
      } else {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }

    case ACTION_TYPES.TODO.DELETE_TODO:
      const { deleteID } = payload;
      const newFilteredList = state?.list?.filter(
        (item) => item.id !== deleteID
      );
      return {
        ...state,
        list: newFilteredList,
      };

    case ACTION_TYPES.TODO.REMOVE_ALL_TODO:
      return { list: [] };

    case ACTION_TYPES.TODO.EDIT_TODO:
      const { editID } = payload;
      return state;

    default:
      return state;
  }
};

export default todoState;
