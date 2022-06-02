import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white border-b w-full sticky top-0 py-3 z-50 ">
      <div className="px-5 flex flex-wrap justify-between items-center mx-auto">
        <div className="flex justify-between items-center space-x-12">
          <Link to={"/"} className="flex">
            <svg
              className="mr-3 h-10 w-6"
              viewBox="0 0 52 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
                fill="#a78bfa"
              />
              <path
                d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
                fill="#8b5cf6"
              />
              <path
                d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
                fill="#7c3aed"
              />
            </svg>
            <h1 className="self-center text-md font-bold whitespace-nowrap">
              Crypto<span className="text-violet-500">Cap</span>
            </h1>
          </Link>
          {/* <ul className="hidden md:flex flex-col mt-4 md:flex-row md:space-x-3 text-gray-500 md:mt-0 text-md font-semibold">
            <li>
              <Link className="block py-2 pr-4 pl-3" to={"/dashboard"}>
                Start
              </Link>
            </li>
            <li>
              <Link className="block py-2 pr-4 pl-3" to={"/dashboard"}>
                Projects
              </Link>
            </li>
            <li>
              <Link className="block py-2 pr-4 pl-3" to={"/dashboard"}>
                Planning
              </Link>
            </li>
            <li>
              <Link className="block py-2 pr-4 pl-3" to={"/dashboard"}>
                Calendar
              </Link>
            </li>
          </ul> */}
        </div>
        <div className="hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-3 md:mt-0 md:text-sm md:font-medium">
            <li>
              <button className="px-5 py-2.5 bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded">
                Login
              </button>
            </li>
            <li>
              <button className="px-5 py-2.5 bg-indigo-500 focus:ring-4 focus:ring-indigo-300 text-white rounded">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
