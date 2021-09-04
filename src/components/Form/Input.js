/* eslint-disable no-unreachable */
import { InputStyled } from "./styled";
import PropTypes from "prop-types";

const InputField = (props) => {
  const { placeholder, ...rest } = props;
  return <InputStyled placeholder={placeholder} {...rest} />;
};

InputField.defaultProps = {
  placeholder: "",
};

InputField.propTypes = {
  placeholder: PropTypes.string,
};

export default InputField;
