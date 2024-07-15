import React from "react";
import navConfig from "../../Config/navConfig";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { logo, menuItems, searchPlaceholder } = navConfig;
  return (
    <>
      <nav className="bg-slate-400 shadow-lg p-4">
        <div className="flex justify-between items-center container mx-auto">
          {/* logo */}
          <div>{logo}</div>
          {/* menu items */}
          <div className="hidden md:flex space-x-4 gap-5">
            <ul className="flex space-x-4 gap-5">
              {menuItems.map((item, index) => (
                <li key={index} className="">
                  <Link
                    to={item.link}
                    className="text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* search */}
          <div className="relative text-gray-600">
            <input
              type="text"
              name="search"
              placeholder={searchPlaceholder}
              className="bg-gray-600 text-white h-10 w-32 px-5  rounded-full text-sm focus:outline-none"
            />
            <button className="bg-green-500 p-2 text-sm rounded-lg mx-4">
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
