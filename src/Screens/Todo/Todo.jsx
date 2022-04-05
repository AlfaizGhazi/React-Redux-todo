import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoAction,
  removeAllTodoAction,
} from "../../Services/Redux/Actions";
import { StyledDiv, StyledInput, StyledButton } from "../../StyledComponents";
import { TodoData } from "../../Components";

export const Todo = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const todoList = useSelector((state) => state.todoState.list);

  const [inputData, setInputData] = React.useState("");

  const handleOnChange = (event) => {
    setInputData(event.target.value);
  };

  const handleOnClick = () => {
    dispatch(addTodoAction(inputData));
    setInputData("");
  };

  return (
    <>
      <StyledDiv
        className={
          isDarkMode
            ? "container d-flex justify-content-center text-light text-center my-5"
            : "container d-flex justify-content-center text-center my-5"
        }
      >
        <StyledInput
          className={
            isDarkMode
              ? "form-control text-light todo--screen--dark"
              : "form-control todo--screen"
          }
          value={inputData}
          onChange={(event) => handleOnChange(event)}
        />
        <StyledButton
          className={isDarkMode ? "mx-2 btn btn-danger" : "mx-2 btn btn-dark"}
          onClick={() => handleOnClick()}
        >
          Add Todo
        </StyledButton>
        <StyledButton
          className={isDarkMode ? "mx-2 btn btn-danger" : "mx-2 btn btn-dark"}
          onClick={() => dispatch(removeAllTodoAction())}
          disabled={todoList.length >= 1 ? false : true}
        >
          Remove All Todo
        </StyledButton>
      </StyledDiv>
      <TodoData isDarkMode={isDarkMode} todoList={todoList} />
    </>
  );
};
