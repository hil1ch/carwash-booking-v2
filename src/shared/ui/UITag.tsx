import { Tag } from "antd";
import type { TagProps } from "antd";

interface UITagProps extends TagProps {
  variant: "filled" | "solid" | "outlined" | undefined;
  color: string;
}

export const UITag = ({ variant, color, ...props }: UITagProps) => (
  <Tag variant={variant} color={color} {...props} />
);
