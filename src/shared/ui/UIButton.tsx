import { Button } from "antd";
import type { ButtonProps } from "antd";
import React from "react";
import classNames from "classnames";
import { useLinkClickHandler } from "react-router";

export type ButtonTemplateProps = Omit<ButtonProps, "href"> & {
  name?: string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
} & (
  | { isLink: true; href: string }
  | { isLink?: false; href?: never }
);

type UIButtonLinkProps = Omit<ButtonProps, "href"> & { href: string };

const UIButtonLink = ({ href, onClick, ...props }: UIButtonLinkProps) => {
  const handleRouterClick = useLinkClickHandler<HTMLElement>(href, {
    target: props.target,
  });

  const handleClick: ButtonProps["onClick"] = (event) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      handleRouterClick(event);
    }
  };

  return <Button {...props} href={href} onClick={handleClick} />;
};

export const UIButton = ({
  name,
  children,
  className,

  iconStart,
  iconEnd,

  isLink,
  href,

  type = "primary",
  size = "large",

  ...restProps
}: ButtonTemplateProps) => {
  const mainClassName = "font-bold !flex";

  const variantClassMap = {
    primary: "",
    default:
      "",
    dashed: "bg-transparent hover:!bg-transparent shadow-none",
    link: "!text-inherit hover:!text-primary dark:!text-white hover:!border-b-inherit rounded-none duration-300 !h-auto !p-0",
    text: "p-0! bg-inherit!",
  };

  const content = (
    <div className="flex gap-2">
      {iconStart && <span className="flex items-center">{iconStart}</span>}
      {children || name}
      {iconEnd && <span className="flex items-center">{iconEnd}</span>}
    </div>
  );

  const variantClassName = variantClassMap[type ?? "primary"];
  const buttonProps = {
    ...restProps,
    size,
    type,
    className: classNames(mainClassName, variantClassName, className),
  };

  if (isLink) {
    return (
      <UIButtonLink {...buttonProps} href={href}>
        {content}
      </UIButtonLink>
    );
  }

  return <Button {...buttonProps}>{content}</Button>;
};