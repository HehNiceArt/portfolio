import React from 'react';
import styled from "styled-components";

const theme = {
     black: {
        default: "#000000",
        hover: "#ffffff"
     }
}

const Button = styled.button`
background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 10%;
  border-radius: 5px;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  margin: 0%;
  transform: ${props => `scale(${props.width}, ${props.height})`};
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
Button.defaultProps = {
    theme: "black",
};

function clickMe(){
    alert("Button pressed!");
}
const ButtonToggle = styled(Button)`
    opacity: 0.7;
    ${({ active }) =>
        active &&
        `
        opacity: 1;
    `}
`;

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;


export default Button;
