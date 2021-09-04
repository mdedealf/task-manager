import PropTypes from "prop-types";
import ButtonStyled from "../button/styled";
import { HeaderContainer } from "./styled";

const Header = (props) => {
  const { title } = props;
  return (
    <>
      <HeaderContainer>
        <h1>{title}</h1>
        <ButtonStyled color="black" bgColor="orange">Add</ButtonStyled>
      </HeaderContainer>
    </>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
