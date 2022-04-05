import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction } from "../../Services/Redux/Actions";
import {
  StyledDiv,
  StyledSpan,
  StyledButton,
} from "../../StyledComponents";

export const TodoData = (props) => {
  const { isDarkMode, todoList } = props;
  const dispatch = useDispatch();
  return (
    <StyledDiv
      className={
        isDarkMode
          ? "container text-light text-center my-5 todo--data"
          : "container text-center my-5 todo--data"
      }
    >
      {todoList.map((item) => {
        return (
          <StyledDiv className={"border my-2 todo--list"} key={item.id}>
            <StyledSpan title={`ID: ${item.id}\nData: ${item.data}`}>
              {item.data}
            </StyledSpan>
            <StyledButton
              className={
                isDarkMode
                  ? "mx-2 btn btn-sm btn-danger delete--button"
                  : "mx-2 btn btn-sm btn-dark delete--button"
              }
              onClick={() => dispatch(deleteTodoAction(item.id))}
            >
              Delete
            </StyledButton>
          </StyledDiv>
        );
      })}
    </StyledDiv>
  );
};
