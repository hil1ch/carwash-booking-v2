import { InputNumber } from "antd";
import type { InputNumberProps } from "antd";
import classNames from "classnames";

interface InputQuantityTemplateProps extends InputNumberProps {
  className?: string;
}

const sharedProps = {
  mode: "spinner" as const,
  style: { width: 120 },
};

const mainClass = "";

const InputNumberQuantityTemplate = ({
  value,
  onChange,
  className: secondaryClass,
  controls,
  ...rest
}: InputQuantityTemplateProps) => {
  return (
    <InputNumber
      className={classNames(mainClass, secondaryClass)}
      {...sharedProps}
      {...rest}
      controls={controls}
      variant="filled"
      size="small"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputNumberQuantityTemplate;