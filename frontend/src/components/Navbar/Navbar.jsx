import React from "react";
import logo from '../../assets/logo.png'
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import HorizontalList from "../horizontalist/horizontalist";
import SearchBar from "../Searchbar/Searchbar";
function Navbar() {
  return (
    
    <nav className="bg-white">
      <div className="max-w-8xl px-8 sm:px-6 lg:px-28">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-16 w-48" src={logo} alt="Logo" />
          </div>
          <SearchBar/>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                  Log in / Sign Up
              </a>
              <a
                href="/"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                عربي
              </a>
              <a
                href="/"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                <CountryDropdown/>
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <HorizontalList/>
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
          ></a>
          <a
            href="/"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            About
          </a>
          <a
            href="/"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
