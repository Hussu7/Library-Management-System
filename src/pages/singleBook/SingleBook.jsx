import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../../components/cards/Card";



const SingleBook = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    if (response.status == 200) {
      setBook(response.data.data);
    }
  };
  const handleDelete=async()=>{
    const response=await axios.delete(`http://localhost:3000/book/${id}`)
    if (response.status==200){
      alert("book deleted")
      navigate("/")

    }
  }
  const handleEdit=()=>{

  }
  useEffect(() => {
    fetchBook();
  }, []);
 
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center gap-18 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      <div className=" p-14 mb-8 max-w-screen flex flex-row gap-16 justify-center items-center text-center">
        <img className=" h-96 w-80 aspect-square object-contain" src={book.imageUrl} alt="" />
        <div className="p-5 border-2 text-left ">
          <h5 className="mb-2   tracking-tight  ">
           <span className="text-l font-bold"> Book Name: </span> {book.bookName}
          </h5>

          <h5 className="mb-2  tracking-tight  ">
          <span className="text-l font-bold"> Price: </span> Rs. {book.bookPrice}
          </h5>
          <h5 className="mb-2  tracking-tight  ">
          <span className="text-l font-bold"> Aurther: </span>{book.aurtherName}
          </h5>
          <h5 className="mb-2  tracking-tight ">
          <span className="text-l font-bold"> ISBN Number: </span>{book.isbnNumber}
          </h5>
          <h5 className="mb-2  tracking-tight text-white-900 ">
          <span className="text-l font-bold"> Publication: </span>{book.publication}
          </h5>
          <h5 className="mb-2  tracking-tight ">
          <span className="text-l font-bold"> Publidhed At: </span>{book.publicationDate}
          </h5>
          <button onClick={handleDelete} >Delete </button>
          <Link to={`/updatebook/${book._id}`} onClick={handleEdit} >Edit </Link>
        </div>
      </div>
 
      </div>

     
    
    </>
  );
};

export default SingleBook;
