import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="MaterData"
        width={145}
        height={30}
        data-testid="img-logo"
      />
    </Link>
  );
};

export default Logo;
