import { Table } from "antd";
import type { TableProps } from "antd";
import classNames from "classnames";
import styles from "./UITable.module.css";

export const UITable = <T extends object,>({
  className,
  pagination = false,
  ...props
}: TableProps<T>) => (
  <Table<T>
    {...props}
    className={classNames(styles.table, className)}
    pagination={pagination}
  />
);
