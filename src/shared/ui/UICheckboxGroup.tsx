import { Checkbox } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import classNames from "classnames";

type UICheckboxGroupProps<T = string> = CheckboxGroupProps<T>;

export const UICheckboxGroup = <T = string,>({
  className,
  ...rest
}: UICheckboxGroupProps<T>) => (
  <Checkbox.Group<T> className={classNames(className)} {...rest} />
);
