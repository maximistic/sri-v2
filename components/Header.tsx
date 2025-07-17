"use client";
import Link from "next/link";
import { ModeToggle } from "./ui/ModeToggle";
import { HamburgerIcon } from "./SideMenu2";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-screen p-4 md:p-8 flex justify-between items-center z-10">
      <div className="menu-logo">
        <Link href="/" className="text-foreground text-lg md:text-xl font-medium cursor-pointer">
          Sri
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <ModeToggle />
        
        {/* Menu Toggle */}
        <div className="menu-open cursor-pointer p-2" onClick={toggleMenu}>
          <HamburgerIcon isOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;