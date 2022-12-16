interface AvatarProps {
  name: string;
}

const Avatar = (props: AvatarProps) => {
  const { name } = props;

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="h-12 w-12 bg-slate-9 rounded-full flex items-center justify-center font-medium">
      {initials}
    </div>
  );
};

export default Avatar;
