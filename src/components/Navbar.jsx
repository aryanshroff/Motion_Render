import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav className="fixed top-0 flex items-center w-full px-6 py-5 sm:px-16 x-20 bg-primary ">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="object-contain w-9 h-9"></img>
          <p className="text-white text-[18px] font-bold cursor-pointer">Aryan Shroff <span className="hidden sm:block">| FrontEnd Developer</span></p>
        </Link>
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
