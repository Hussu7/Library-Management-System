import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";

const CreateBook = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: "",
    aurtherName: "",
    bookPrice: null,
    isbnNumber: null,
    publication: "",
    publicationDate: null,
  });
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("image", image);

      const response = await axios.post("http://localhost:3000/book", formData);

      if (response.status === 201) {
        alert("book added successfully");
        navigate("/");
      } else if (response.status === 500) {
        cconsole.log(response);
      } else {
        alert("Something Went Wrong");
      }
    } catch (error) {
      if (error) {
        console.log("file type not supported");
      }
    }
  };

  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="w-full h-full py-8 dark:text-white dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center ">
          <BackButton />
          <h1 className="font-bold text-2xl mb-10">Enter Book Details</h1>
          <form
            className="max-w-sm mx-auto grid grid-cols-2  items-center gap-x-7"
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
                appearence="textfield"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Isbn Number"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
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
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
              <div
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="imagw"
              >
                Upload Book Image
              </div>
            </div>
            <button
              type="submit"
              className="text-white w-6 h-12 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBook;
