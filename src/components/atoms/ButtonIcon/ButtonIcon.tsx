type ButtonIconProps = {
  children: React.ReactNode;
  hasNotification?: boolean;
};

const ButtonIcon = (props: ButtonIconProps) => {
  const { children, hasNotification } = props;

  return (
    <button className="relative" data-testid="btnicon">
      {children}
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
