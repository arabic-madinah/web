import { type FC, type PropsWithChildren } from "react";
import { Button } from "@headlessui/react";

export interface PrimaryButtonProps extends PropsWithChildren {
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  className?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  disabled,
  children,
  type = "button",
  className,
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-md bg-gray-700
        px-3 py-1.5 h-10 text-sm/6 font-semibold text-white shadow-inner
        shadow-white/10 focus:not-data-focus:outline-none data-focus:outline
        data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 ${className || ""}`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
