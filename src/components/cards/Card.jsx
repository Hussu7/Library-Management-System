import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <>
      <div className="max-w-xs bg-white border border-gray-200 flex flex-wrap flex-col items-center py-4 text-center rounded-lg shadow duration-200 hover:scale-105 hover:shadow-xl  dark:bg-gray-800 dark:border-gray-700 ">
        <img
          className=" rounded aspect-square object-cover items-center"
          src={book.imageUrl}
          alt="book Image"
          height="100px"
          width="100px"
        />
        <div className="p-4 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.bookName}
          </h5>
          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            <b>Rs:</b> {book.bookPrice}
          </p>
          <Link
           to={`/book/${book._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>

   
    </>
  );
};

export default Card;
