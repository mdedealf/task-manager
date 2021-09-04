/* eslint-disable no-undef */
import styled from "styled-components";
import propTypes from "prop-types";

const ButtonStyled = styled.button`
  padding: 16px 24px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid black;
  font-weight: 700;
  font-size: 16px;
  color: black;
  background-color: white;

  &:hover {
    cursor: pointer;
    border: none;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
  }

  &:active {
    transform: translateY(2px);
  }
`;

ButtonStyled.defaultProps = {
  color: "#000",
  bgColor: "blue",
  onClick: () => {},
};

ButtonStyled.propTypes = {
  color: propTypes.string,
  bgColor: propTypes.string,
  onClick: propTypes.func,
};

export default ButtonStyled;
