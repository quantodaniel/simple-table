import React from "react";

type ButtonIconProps = {
  children?: React.ReactNode;
  hasNotification?: boolean;
  variant?: "icon" | "primary" | "secondary";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
};

const ButtonIcon = (props: ButtonIconProps) => {
  const { children, hasNotification, variant, startIcon, endIcon } = props;

  let className = "text-slate-500 hover:text-gray-900";
  if (variant === "primary") {
    className = "bg-slate-900 text-white px-3";
  }

  if (variant === "secondary") {
    className =
      "bg-slate-100 text-gray-900 px-3 hover:bg-slate-200 hover:text-gray-900";
  }

  return (
    <button
      className={`relative flex items-center font-bold gap-2 text-sm rounded-lg transition-all  ${className}`}
      data-testid="btnicon"
    >
      {startIcon && React.cloneElement(startIcon, { className: "w-5 h-5" })}
      {children}
      {endIcon && React.cloneElement(endIcon, { className: "w-5 h-5" })}

      {hasNotification && (
        <div
          className="absolute bg-red-500 w-2 h-2 top-0 right-0 rounded-full border border-white"
          data-testid="btnicon-notification"
        />
      )}
    </button>
  );
};

export default ButtonIcon;
