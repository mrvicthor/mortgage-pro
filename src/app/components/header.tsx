"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <header className="sticky z-50 top-4 px-4">
        <div className="container mx-auto bg-white flex backdrop-blur-sm items-center justify-between max-w-7xl py-4 px-4 rounded-4xl">
          <Link
            href="/"
            className="text-[#006466] hover:text-gray-500  capitalize font-bold transition-colors"
          >
            mortgage freedom pro
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-[#B35F00] hover:text-gray-500  text-[1rem] font-normal capitalize transition-colors"
            >
              about us
            </Link>
            <Link
              href="#"
              className="text-[#B35F00] hover:text-gray-500  text-[1rem] font-normal capitalize transition-colors"
            >
              pricing
            </Link>
            <Link
              href="#"
              className="text-[#B35F00] hover:text-gray-500 text-[1rem] font-normal capitalize transition-colors"
            >
              features
            </Link>
            <Link
              href="#"
              className="text-[#B35F00] hover:text-gray-500  text-[1rem] font-normal capitalize transition-colors"
            >
              investor relation
            </Link>
          </nav>
          <button
            aria-label="get started"
            className="hidden group bg-[#006466] h-[2.4375rem] w-[8.5rem] md:flex items-center gap-1 justify-center text-white capitalize rounded-4xl cursor-pointer"
          >
            get started{" "}
            <IoIosArrowRoundForward
              className="group-hover:animate-pulse"
              size={24}
            />
          </button>
          <button
            onClick={toggleMenu}
            aria-label="menu button"
            className="md:hidden"
          >
            {showMenu ? (
              <X className="text-[#006466]" />
            ) : (
              <Menu className="text-[#006466]" />
            )}
          </button>
        </div>
      </header>
      <MobileMenu showMenu={showMenu} handleMenu={toggleMenu} />
    </>
  );
};

export default Header;
