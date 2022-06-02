import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border-r hidden md:block sticky top-0 w-64">
      <div className="flex  flex-col p-5 space-y-7 w-full">
        <div className="flex flex-col">
          <ul className="space-y-2">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-10">
                <div className="text-sm font-bold tracking-wide text-gray-400">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded  bg-violet-100 text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">home</span>
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded text-gray-400 hover:bg-violet-100 hover:text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">account_balance_wallet</span>
                <span className="ml-3">Wallet</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded text-gray-400 hover:bg-violet-100 hover:text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">query_stats</span>
                <span className="ml-3">Statistic</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded text-gray-400 hover:bg-violet-100 hover:text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">business_center</span>
                <span className="ml-3">Portofolio</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded text-gray-400 hover:bg-violet-100 hover:text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">real_estate_agent</span>
                <span className="ml-3">Sales</span>
              </Link>
            </li>
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-10">
                <div className="text-sm font-bold tracking-wide text-gray-400">
                  Services
                </div>
              </div>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded text-gray-400 hover:bg-violet-100 hover:text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">settings</span>
                <span className="ml-3">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded text-gray-400 hover:bg-violet-100 hover:text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">layers</span>
                <span className="ml-3">Integrations</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded text-gray-400 hover:bg-violet-100 hover:text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">queue</span>
                <span className="ml-3">Stack</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded text-gray-400 hover:bg-violet-100 hover:text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">queue</span>
                <span className="ml-3">Stack</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-row text-sm font-medium h-11 rounded text-gray-400 hover:bg-violet-100 hover:text-violet-500 px-5 py-3 items-center"
                to={"/dashboard"}
              >
                <span className="material-icons">bar_chart</span>
                <span className="ml-3">Report</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
