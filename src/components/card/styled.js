import styled, { css } from "styled-components";

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;

  margin: 12px 0;
  padding: 12px 0;
  background-color: #f4f4f4;
  border-radius: 12px;
  padding: 24px 32px;
  width: 500px;

  ${(task) =>
    task.$reminder &&
    css`
      border-left: 8px solid blue;
    `}

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }

  div {
    font-size: 20px;
    font-weight: 700;
  }
`;

const CardTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  width: 500px;
`;

export { CardListContainer, CardTitleWrapper };
