import styled from "styled-components";

export const StyledDiv = styled.div`
  &.todo--data {
    /* width: 580px; */
    display: flex;
    flex-direction: column;
    width: 600px;
  }

  &.todo--list {
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    justify-content: space-between;
  }
`;

export const StyledInput = styled.input`
  &.todo--screen {
    width: 460px;
  }

  &.todo--screen--dark {
    width: 460px;
    background-color: #0a1929;
    color: #fff;
  }
`;

export const StyledButton = styled.button`
/* &.edit--button{
  position: absolute;
  right: 0%;
}
&.delete--button{
  position: absolute;
  right: 10%;
} */
`;

export const StyledSpan = styled.span``;

export const StyledH5 = styled.h5``;
