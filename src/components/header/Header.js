import ButtonStyled from "../button/styled";
import { HeaderContainer } from "./styled";

const Header = (props) => {
  const { title, btnTitle, color, bgColor, onClick } = props;

  return (
    <>
      <HeaderContainer>
        <h1>{title}</h1>
        <ButtonStyled color={color} bgColor={bgColor} onClick={onClick}>
          {btnTitle}
        </ButtonStyled>
      </HeaderContainer>
    </>
  );
};

export default Header;
