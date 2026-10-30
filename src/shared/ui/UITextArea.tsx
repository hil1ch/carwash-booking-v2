import { Input } from "antd";
import classNames from "classnames";
import type { ComponentProps } from "react";

type UITextAreaProps = ComponentProps<typeof Input.TextArea>;

export const UITextArea = ({
  autoSize = { minRows: 4, maxRows: 6 },
  className,
  maxLength = 500,
  showCount = true,
  ...rest
}: UITextAreaProps) => (
  <Input.TextArea
    {...rest}
    autoSize={autoSize}
    className={classNames("text-base!", className)}
    maxLength={maxLength}
    showCount={showCount}
  />
);
