import { Breadcrumb } from "antd";
import { ROUTER_PATHS } from "../constants";
import { Link } from "react-router";

export interface BreadcrumbItem {
  title: string;
  to?: string;
}

interface BreadcrumbProps {
  pageName?: string;
  items?: BreadcrumbItem[];
}

export const UIBreadcrumb = ({ pageName, items }: BreadcrumbProps) => {
  if (!pageName && (!items || items.length === 0)) {
    return null;
  }
  const breadcrumbItems =
    items && items.length > 0
      ? items
      : [
          { title: "Автомойки", to: ROUTER_PATHS.CARWASHES },
          { title: pageName || "" },
        ];

  const mappedItems = breadcrumbItems.map((item) => ({
    title: item.to ? <Link to={item.to}>{item.title}</Link> : item.title,
  }));

  return (
    <div className="">
      <Breadcrumb items={mappedItems} className="font-medium" />
    </div>
  );
};
