import { EmptyWrapper } from "./styled";

const Empty = ({ text }) => {
  return (
    <>
      <EmptyWrapper>{text}</EmptyWrapper>
    </>
  );
};

export default Empty;
