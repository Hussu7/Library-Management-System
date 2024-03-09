import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import DeleteConfirmation from "../../components/DeleteConfirmation/DeleteConfirmation";
import BackButton from "../../components/BackButton/BackButton";
const EditBook = () => {
  const [books, setBooks] = useState([]);
  // const [confirmdelete, setConfirmDelete]=useState(false)
  const fetchBooks = async () => {
    const fetchResponse = await axios.get("http://localhost:3000/book");
    setBooks(fetchResponse.data.data);
  };
  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3000/book/${id}`);
    if (response.status === 200) {
      alert("Your Book deleted successfully");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [books]);

  return (
    <div className="w-full  min-h-screen dark:text-white dark:bg-gray-800 dark:border-gray-700">
      <Navbar />
      <BackButton/>
      <div className="p-10">
        <h1 className="text-2xl font-bold text-center my-4">Edit Your Books</h1>
        <ul className="max-w-full border-t-2 p-4 divide-y-2 divide-gray-200 dark:divide-gray-700">
          {books.map((book) => {
            return (
              <li key={book._id} className="p-3  sm:pb-4">
                <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={book.imageUrl}
                      alt="book Image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {book.bookName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {book.aurtherName}
                    </p>
                  </div>
                  <div className="inline-flex gap-2 items-center text-base font-semibold text-gray-900 dark:text-white">
                    <Button
                      link={`/updatebook/${book._id}`}
                      text="Update Book"
                    />
                    <button
                      //  link={`/confirmdeletebook/${book._id}`}
                      text="Delete Book"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => {
                        handleDelete(book._id);
                      }}
                    >
                      Delete Book
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EditBook;
