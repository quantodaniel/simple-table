import React from "react";

type ButtonIconProps = {
  children?: React.ReactNode;
  hasNotification?: boolean;
  variant?: "icon" | "primary" | "secondary";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  active?: boolean;
  onClick?: () => void;
};

const classes = {
  icon: "p-2 hover:bg-slate-200 text-slate-5 hover:text-dark-1",
  iconActive: "p-2 hover:bg-slate-200 bg-slate-9 text-dark-1 hover:text-dark-1",
  primary: "bg-slate-1 text-white px-3",
  secondary:
    "bg-slate-9 text-slate-1 px-3 hover:bg-slate-200 hover:text-dark-1",
  default: "text-slate-5 hover:text-dark-1",
};

const ButtonIcon = (props: ButtonIconProps) => {
  const {
    children,
    hasNotification,
    variant,
    startIcon,
    endIcon,
    active,
    onClick,
  } = props;

  let className = classes[variant || "default"];
  if (variant === "icon" && active) {
    className = classes.iconActive;
  }

  return (
    <button
      className={`relative flex justify-center items-center font-bold gap-2 text-sm rounded-lg transition-all  ${className}`}
      data-testid="btnicon"
      onClick={onClick}
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
