import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const DashNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "My Registration", path: "/registeration" },
    { name: "My Results", path: "/result" },
    { name: "Settings", path: "/settings" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <>
      {!isOpen ? (
        <button
          className="top-5 right-2 fixed"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          className="fixed top-5 right-4 z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      )}
      <nav
        className={`bg-gray-800 py-0 container text-white fixed top-0 right-0 w-[30vw] h-full ease-in-out duration-300 ${
          isOpen ? "translaye-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-around h-[40vh]  p-6">
          {links.map((link) => (
            <NavLink className={'my-2 hover:opacity-50'} key={link.name} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <ul className="static top-0 left-3 p-3">
        <NavLink to={'/'} className={'hover:opacity-50 text-4xl font-mono font-bold'}>Home</NavLink>
      </ul>
    </>
  );
};
