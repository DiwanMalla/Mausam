"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { Moon, Sun } from "lucide-react";
import CitySearch from "./CitySearch";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Mausam logo" width={100} height={50} />
        </Link>{" "}
        {/*search*/}
        <div className="flex gap-4">
          <CitySearch />
          {/*theme switcher*/}
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`flex items-center cursor-pointer transition-transform duration-500 ease-in-out ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 " />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;