import ButtonStyled from "./styled";

const Button = (props) => {
  const { btnName, color, bgColor, onClick } = props;
  return (
    <>
      <ButtonStyled color={color} bgColor={bgColor} onClick={onClick}>
        {btnName}
      </ButtonStyled>
    </>
  );
};

export default Button;
