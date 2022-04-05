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

    @media only screen and (max-width: 390px) {
      width: 360px !important;
    }
  }

  @media only screen and (max-width: 390px) {
    display: flex !important;
    height: auto !important;
    flex-direction: column !important;
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
  @media only screen and (max-width: 390px) {
    width: 360px !important;
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

  @media only screen and (max-width: 390px) {
    width: 100px !important;
  }
`;

export const StyledSpan = styled.span``;

export const StyledH5 = styled.h5``;

export const StyledMobileWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 390px) {
    display: flex !important;
    justify-content: center !important;
  }
`;

export const StyledWindowWrapper = styled.div`
  display: flex !important;
  @media only screen and (max-width: 390px) {
    display: none !important;
  }
`;
