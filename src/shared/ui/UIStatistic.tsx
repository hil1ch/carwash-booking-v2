import { Statistic, Card } from "antd";
import type { ReactNode } from "react";

export const UIStatistic = ({
  title,
  prefix,
  suffix,
  value,
  precision,
  children,
  className
}: {
  title: string;
  prefix?: ReactNode;
  suffix?: string;
  value: number;
  precision?: number;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <Card variant="borderless">
    <Statistic
      title={title}
      value={value}
      precision={precision}
      styles={{ content: { color: "blue" } }}
      prefix={prefix}
      suffix={suffix}
      className={className}
    />
    {children}
  </Card>
  );
};
