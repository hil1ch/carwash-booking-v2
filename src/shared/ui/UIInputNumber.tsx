import { InputNumber } from "antd";
import type { InputNumberProps } from "antd";
import classNames from "classnames";

interface UIInputNumberProps extends InputNumberProps {
  className?: string;
}

const sharedProps = {
  mode: "spinner" as const,
  style: { width: "100%" },
};

const mainClass = "";

export const UIInputNumber = ({
  value,
  onChange,
  className: secondaryClass,
  controls,
  size = "large",
  ...rest
}: UIInputNumberProps) => {
  return (
    <InputNumber
      className={classNames(mainClass, secondaryClass)}
      {...sharedProps}
      {...rest}
      controls={controls}
      variant="filled"
      size={size}
      value={value}
      onChange={onChange}
    />
  );
};