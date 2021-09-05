import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;

  margin: 62px 102px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;

  background-color: #fafafa;
  border: 1px solid lightblue;
  border-radius: 8px;
  padding: 20px;

  > :nth-child(3) {
    margin-top: 12px;
  }

  > :nth-child(4) {
    margin: 24px 0 16px 0;
    width: 100%;
  }
`;

export { ContainerWrapper, FormContainer };
