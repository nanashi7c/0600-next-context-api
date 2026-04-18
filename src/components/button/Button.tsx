import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-(--primary-color) text-(--font-color-light) hover:bg-(--primary-color-darker)",
  secondary:
    "bg-(--secondary-color) text-(--font-color-light) hover:opacity-80",
};

export const Button = ({
  variant = "primary",
  type = "button",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`mr-4 cursor-pointer py-2 px-4 rounded w-full transition-[background] duration-500 tracking-[1.4px] text-[10px] shadow-[2px_2px_4px_1px_#1e514036] text-(--font-color-light) border-0 ${variantStyles[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
