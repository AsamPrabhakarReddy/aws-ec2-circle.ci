import React, { useEffect, useState } from "react";
// import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "Features",
      path: "/services",
    },
    {
      link: "About Us",
      path: "/about",
    },
    {
      link: "Enterprise",
      path: "product",
    },
    {
      link: "Pricing",
      path: "/pricing",
    },
    {
      link: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-20">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 right-0 left-0 border-b bg-white duration-1000"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base font-semibold text-cdnColor"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/login"
              className="bg-cdnColor text-white font-semibold py-2 text-center px-8 rounded-3xl"
            >
              Start trial
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-gray-500 "
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>


        <div
          className={
            !isMenuOpen
              ? "md:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
              : "md:hidden fixed left-0 top-0 w-[70%] border-r h-[75%] bg-white dark:bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <h1 className="w-full text-2xl text-colorFour font-bold m-4 cursor-pointer">
            SYNDÈO.
          </h1>
          <ul className=" uppercase p-4">
            <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
              <a href="/">Home</a>
            </li>
            <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
              <a href="/about">About Us</a>
            </li>
            <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
              <a href="/contact">Contact</a>
            </li>

            <li className="p-4 text-colorThree cursor-pointer font-medium dark:text-white">
              <a href="/login">Login / Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
