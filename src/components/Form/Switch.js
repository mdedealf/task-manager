import { Switch } from "antd";

const SwitchToggle = (props) => {
  const { onChange } = props;
  return <Switch defaultChecked onChange={onChange} />;
};

export default SwitchToggle;
