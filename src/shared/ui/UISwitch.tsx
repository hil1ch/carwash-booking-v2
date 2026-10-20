import { Switch } from "antd";
import type { SwitchProps } from "antd";
import classNames from "classnames";

interface SwitchTemplateProps extends SwitchProps {
  className?: string;
}

export const UISwitch = ({ className, ...rest }: SwitchTemplateProps) => {
  return <Switch className={classNames(className)} {...rest} />;
};
