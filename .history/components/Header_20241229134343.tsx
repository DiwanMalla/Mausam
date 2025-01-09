import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
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
