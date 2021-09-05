import ButtonStyled from "./styled";

const Button = (props) => {
  const { btnName, color, bgColor, block = false, onClick } = props;
  return (
    <>
      <ButtonStyled
        color={color}
        bgColor={bgColor}
        onClick={onClick}
        $block={block}
      >
        {btnName}
      </ButtonStyled>
    </>
  );
};

export default Button;
