import React, { memo, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import BasicModal from "../modal/Modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="">
        <div className="container mx-auto py-4 flex items-center justify-between px-4 lg:px-0">

          <div
            className={`nav__collect flex gap-6 items-center ${
              isMenuOpen ? "flex-col absolute " : "hidden lg:flex"
            } transition-all duration-300 lg:relative lg:flex-row lg:w-auto lg:bg-transparent`}
          >
            <div className="flex gap-4 items-center">
              <BasicModal ooo="Card yaratish" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
