"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Mausam logo" width={100} height={50} />
        </Link>
        <div>
          {/*search*/}
          {/*theme switcher*/}
          <div>{isDark ? <Sun /> : <Moon />}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
