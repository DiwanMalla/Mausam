import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95">
      <div>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Mausam logo" width={100} height={50} />
        </Link>
        <div>
          {/*search*/}
          {/*theme switcher*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
