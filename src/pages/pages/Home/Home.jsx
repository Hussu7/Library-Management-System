import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Card from "../../../components/cards/Card";
import axios from "axios";

const Home = () => {
  const [book, setBook] = useState([]);
  const [emptyBook, setEmptyBook] = useState(false);
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/book");
    if (response.status == 200) {
      setBook(response.data.data);
    } else if (response.status == 404) {
      console.log("something went wrong")
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className=" min-h-screen dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <Navbar />
        <div className="content flex flex-col items-center py-10">
          <h2 className="mb-6 text-3xl underline font-extrabold">Book Lists</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {book.length > 0 ? (
              book.map((book) => {
                return <Card key={book._id} book={book} />;
              })
            ) : (
              <div> No book Found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
