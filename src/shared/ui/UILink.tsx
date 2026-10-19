import React from "react";
import classNames from "classnames";
import { Link } from "react-router";
import type { LinkProps } from "react-router";

interface UILink extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const mainClass = "!text-inherit";

export const UILink = ({ to, className, children, ...rest }: UILink) => {
  return (
    <Link className={classNames(mainClass, className)} {...rest} to={to}>
      {children}
    </Link>
  );
};