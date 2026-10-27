import { Statistic, Card } from "antd";
import type { ReactNode } from "react";

export const UIStatistic = ({
  title,
  prefix,
  suffix,
  value,
}: {
  title: string;
  prefix?: ReactNode;
  suffix?: string;
  value: number;
}) => {
  return (
    <Card variant="borderless">
      <Statistic
        title={title}
        value={value}
        precision={0}
        styles={{ content: { color: "blue" } }}
        prefix={prefix}
        suffix={suffix}
      />
    </Card>
  );
};
