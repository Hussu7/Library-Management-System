import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="sticky bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b shadow border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="data:image/png;base64,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"
              className="h-8"
              alt="logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LMS
            </span>
          </Link>
          <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              to="/dashboard"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Dashboard</Link>
            {/* <Link
              to="/createbook"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Book
            </Link>
            <Link
              to="/editbook"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit Book
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
