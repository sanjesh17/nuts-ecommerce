import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 z-50 shadow-lg bg-yellow-50 sticky">
      <div className="container px-6 py-6 mx-auto md:flex bg-yellow-50">
        <div className="flex items-center justify-between">
          <a href="#">
            <h2 className="font-mont font-bold">LOGO</h2>
          </a>
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-yellow-50 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            <a
              href="#"
              className="px-2.5 py-2 font-medium text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2"
            >
              Home
            </a>
            <a
              href="#"
              className="px-2.5 py-2 font-medium text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2"
            >
              Offers
            </a>
            <a
              href="#"
              className="px-2.5 py-2 font-medium text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2"
            >
              Help
            </a>
          </div>

          <div className="relative mt-4 md:mt-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <input
              type="text"
              className="w-full font-mont py-2 pl-10 pr-4 text-gray-700 bg-yellow-50 border rounded-lg focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-green-300"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
