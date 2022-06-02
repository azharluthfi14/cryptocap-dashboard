import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-screen bg-indigo-50 flex">
      <div className="w-full max-w-sm m-auto bg-white shadow-md p-10">
        <div className="flex flex-col">
          <svg
            className="mr-3 h-10"
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
          <h1 className="text-xl text-violet-500 font-bold text-primary mt-4 mb-12 text-center">
            Log in to your account 🔐
          </h1>
        </div>
        <form autoComplete="off">
          <div className="space-y-4">
            <input
              className="w-full text-gray-800 font-semibold border-gray-300 focus:ring-violet-500 focus:border-violet-500 rounded-md
    py-2.5 pl-3"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              className="w-full text-gray-800 font-semibold border-gray-300 focus:ring-violet-500 focus:border-violet-500 rounded-md
    py-2.5 pl-3"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
            />
            <button
              type="submit"
              className="px-5 py-2.5 flex justify-center bg-violet-500 focus:ring-4 focus:ring-violet-300 w-full text-center rounded
    text-white
    font-semibold"
            >
              {/* {isFetching ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null} */}
              Login
            </button>
          </div>
        </form>
        <div className="mt-5">
          <h5 className="text-sm text-center">
            Don't have an account?
            <Link
              className="ml-3 font-bold text-violet-400 hover:text-violet-500"
              to={"/register"}
            >
              Register
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
