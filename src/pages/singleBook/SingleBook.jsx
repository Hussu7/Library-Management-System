import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../../components/BackButton/BackButton";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const fetchBook = async () => {
    const response = await axios.get(`https://lms-backend-xs1z.onrender.com/book/${id}`);
    if (response.status == 200) {
      setBook(response.data.data);
    }
  };
  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-18 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <Navbar />
      
        <div className=" px-14 py-10 mb-8 max-w-screen flex flex-row gap-16 justify-center items-center text-center">
       
          <BackButton />
        
          <img
            className=" h-96 w-80 aspect-square object-contain"
            src={book.imageUrl}
            alt=""
          />
          <div className="p-5 border-2 text-left ">
            <h5 className="mb-2   tracking-tight  ">
              <span className="text-l font-bold"> Book Name: </span>{" "}
              {book.bookName}
            </h5>

            <h5 className="mb-2  tracking-tight  ">
              <span className="text-l font-bold"> Price: </span> Rs.{" "}
              {book.bookPrice}
            </h5>
            <h5 className="mb-2  tracking-tight  ">
              <span className="text-l font-bold"> Aurther: </span>
              {book.aurtherName}
            </h5>
            <h5 className="mb-2  tracking-tight ">
              <span className="text-l font-bold"> ISBN Number: </span>
              {book.isbnNumber}
            </h5>
            <h5 className="mb-2  tracking-tight text-white-900 ">
              <span className="text-l font-bold"> Publication: </span>
              {book.publication}
            </h5>
            <h5 className="mb-2  tracking-tight ">
              <span className="text-l font-bold"> Publidhed At: </span>
              {book.publicationDate}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
