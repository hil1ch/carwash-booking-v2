import classNames from "classnames";
import { Input } from "antd";
import type { InputProps } from "antd";

const variantStyleMap = {
  search: "",
  form: "w-full p-3 hover:bg-white dark:hover:bg-black dark:bg-black text-black! dark:text-white!",
};

interface InputTemplateProps extends InputProps {
  name?: string;
  variantStyle?: keyof typeof variantStyleMap;
  isFormUsing?: boolean;
  error?: string;
}

const mainClass = "text-gray-400 text-base border border-gray-400";

export const UIInput = ({
  variantStyle,
  size = "large",
  error,
  className,
  ...rest
}: InputTemplateProps) => {
  const secondaryClass = variantStyleMap[variantStyle ?? "search"];

  return (
    <div className="relative">
      <Input
        variant="filled"
        status={error ? "error" : undefined}
        className={classNames(mainClass, secondaryClass, className)}
        size={size}
        {...rest}
      />
      {error && (
        <p className="absolute m-0 text-[10px] left-5 text-red-500 font-extralight">
          {error}
        </p>
      )}
    </div>
  );
};
