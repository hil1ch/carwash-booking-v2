import { Badge } from "antd";
import type { BadgeProps } from "antd";

interface IBadgeProps extends BadgeProps {
  count: number;
  className?: string;
  showZero: boolean;
}

export const UIBadge = ({
  count,
  className,
  showZero,
  ...props
}: IBadgeProps) => {
  return (
    <Badge count={count} className={className} showZero={showZero} {...props} />
  );
};
