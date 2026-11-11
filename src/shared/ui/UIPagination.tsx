import { Pagination, type PaginationProps } from "antd";
import cn from "classnames";

interface IPaginationProps extends PaginationProps {
  current: number;
  total: number;
  onChange: NonNullable<PaginationProps["onChange"]>;
  className?: string;
  pageSize: number;
}

export const UIPagination = ({
  current,
  total,
  onChange,
  className,
  pageSize,
  ...props
}: IPaginationProps) => {
  return (
    <Pagination
      current={current}
      total={total}
      align="end"
      pageSize={pageSize}
      hideOnSinglePage
      onChange={onChange}
      className={cn("mt-2!", className)}
      {...props}
    />
  );
};
