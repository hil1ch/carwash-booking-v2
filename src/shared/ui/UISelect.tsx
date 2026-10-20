import { Select } from "antd";
import type { SelectProps } from "antd";
import classNames from "classnames";

interface UISelectProps extends SelectProps {
  className?: string;
}

export const UISelect = ({ className, ...rest }: UISelectProps) => (
  <Select className={classNames(className)} {...rest} />
);
