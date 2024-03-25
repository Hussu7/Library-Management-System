import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import BackButton from "../../components/BackButton/BackButton";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    bookName: "",
    bookPrice: null,
    aurtherName: "",
    isbnNumber: null,
    publication: "",
    publicationDate: null,
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(bookData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    image && formData.append('image',image)
    
    const response = await axios.patch(
      `http://localhost:3000/book/${id}`,
      formData
    );
    if (response.status === 200) {
      alert("book updated successfully!!");
      navigate(`/book/${id}`);
    }
  };
  const initialBookData = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    setBookData(response.data.data);
  };
  useEffect(() => {
    initialBookData();
  }, []);
  
  return (
    <>
    <Navbar/>
      <div className="w-full py-12 min-h-screen dark:text-white dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center ">
       <BackButton/>
        <h1 className="font-bold text-2xl mb-10">Enter Book Details</h1>

        <form
          className="max-w-sm mx-auto grid items-center grid-cols-2 gap-x-7"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label
              htmlFor="bookName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              defaultValue={bookData.bookName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Book name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="aurtherName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Aurther
            </label>
            <input
              type="text"
              id="aurtherName"
              name="aurtherName"
              defaultValue={bookData.aurtherName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Aurther"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="isbnNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Isbn Number
            </label>
            <input
              type="number"
              id="isbnNumber"
              name="isbnNumber"
              defaultValue={bookData.isbnNumber}
              appearence="textfield"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={bookData.isbnNumber}
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="bookPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="bookPrice"
              name="bookPrice"
              defaultValue={bookData.bookPrice}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="publication"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Publication
            </label>
            <input
              type="text"
              id="publication"
              name="publication"
              defaultValue={bookData.publication}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Publication"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="publicationDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Publication Date
            </label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              defaultValue={bookData.publicationDate}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-5 flex flex-col items-left">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="image"
              name="image"
              type="file"
              defaultValue={bookData.image}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              Upload Book Image
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Book
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateBook;
