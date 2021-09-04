import ButtonStyled from "./styled";

const Button = (props) => {
  const { btnName, color, bgColor } = props;
  return (
    <>
      <ButtonStyled color={color} bgColor={bgColor}>
        {btnName}
      </ButtonStyled>
    </>
  );
};

export default Button;
