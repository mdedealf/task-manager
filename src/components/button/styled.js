import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 16px 24px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  font-weight: 700;
  font-size: 16px;

  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};

  &:hover {
    cursor: pointer;
  }
`;
export default ButtonStyled;
