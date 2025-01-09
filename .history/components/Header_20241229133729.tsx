import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Mausam logo" width={100} />
        </Link>
        ,
      </div>
    </header>
  );
};

export default Header;
