import { useState } from "react";
import Logo from "../global/Logo";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container mt-5">
        <div className="bg-dark-10 relative flex items-center justify-between rounded-[10px] p-3.5 md:p-5">
          <a href="#">
            <Logo />
          </a>
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <Navbar isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
}
export default Header;
