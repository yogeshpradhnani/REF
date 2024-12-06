import { useState } from "react";
import logo from "../assets/logo.png";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="w-full  overflow-x-hidden md:overflow-x-hidden fixed scroll-my- shadow-md bg-white top-0 z-1 ">
      <div className=" mx-auto   sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 md:ml-20">
            <img className="w-[124px] h-[63.2px]" src={logo} alt="" />
          </div>
          <div className="hidden md:flex space-x-8">
            <div className="font-bold">
              <button className=" hover:text-gray-900 mt-2">Features</button>
              <ul className="absolute z-1  bg-white hidden group-hover:block  shadow-lg mt-2 rounded-md ">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold">
                    Action
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Another action
                  </a>
                </li>
              </ul>
            </div>
            <button className=" hover:text-gray-900 font-bold">Pricing</button>
            <div className="relative group">
              <button className="hover:text-gray-900 font-bold mt-2">Solutions</button>
              <ul className="absolute z-1 bg-white hidden group-hover:block  shadow-lg mt-2 rounded-md">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Action
                  </a>
                </li>
              </ul>
            </div>
            <button className="hover:text-gray-900 font-bold">About Us</button>
            <button className= 'bg-[#FD89558C] border-1 border-[#FD8955] text-black font-bold rounded-md px-4 py-2 hover:bg-orange-600'>
              Get a Demo
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="hover:text-gray-900 font-bold focus:outline-none focus:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="space-y-2 px-4 py-2 text-center font-bold">
            <li>
              <a href="#" className="block hover:text-gray-900 font-bold">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-900 font-bold">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-900 font-bold">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-900 font-bold">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block bg-orange-500 text-black font-bold text-center rounded-md px-4 py-2 hover:bg-orange-600"
              >
                Get a Demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
