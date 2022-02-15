import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../containers/Button";

export const Navbar = () => {
  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container grid grid-cols-2 items-center ">
        <ul className="col-span-1">
          <li className="px-3 text-4xl text-bold font-mono font-bold">
            <NavLink to={"/"}> Home </NavLink>
          </li>
        </ul>
        <div className=" col-span-1 flex justify-end" id="hamburger">
          <ul className="md:flex hidden w-full md:w-auto items-center">
            <li className="px-3">
              <NavLink to={"/login"}>Log In</NavLink>
            </li>
            <li className="px-3">
              <Button>
                <NavLink to={"/signup"}>Sign Up</NavLink>
              </Button>
            </li>
            <li className="px-3">
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
          <button
            data-collapse-toggle="hamburger"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="hamburger-2"
            aria-expanded="false"
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
        </div>
      </div>
    </nav>
  );
};
