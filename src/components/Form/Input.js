/* eslint-disable no-unreachable */
import { InputStyled } from "./styled";
import PropTypes from "prop-types";

const InputField = (props) => {
  const { placeholder, type, value, onChange, ...rest } = props;
  return (
    <InputStyled
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
};

InputField.defaultProps = {
  placeholder: "",
};

InputField.propTypes = {
  placeholder: PropTypes.string,
};

export default InputField;
