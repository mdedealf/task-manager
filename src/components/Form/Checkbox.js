import { Checkbox } from "antd";

const Check = (props) => {
  const { title, onChange } = props;
  return <Checkbox onChange={onChange}>{title}</Checkbox>;
};

export default Check;
