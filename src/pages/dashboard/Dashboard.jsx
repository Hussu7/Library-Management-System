import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/Button/Button";

import { IoArrowBackCircle } from "react-icons/io5";
import BackButton from "../../components/BackButton/BackButton";


const Dashboard = () => {
  const navigate=useNavigate()
  const goBack=()=>{
    navigate(-1)
  }
  return (
    <>

      <div className="w-full h-screen   dark:text-white dark:bg-gray-800 dark:border-gray-700">
        <Navbar/>
       <div className="content px-14 h-96 flex flex-wrap flex-col gap-12 justify-center " >
        <BackButton/>
       <h1 className="text-3xl font-extrabold text-center mb-6 underline underline-offset-8 ">
          Welcome to the Dashboard
        </h1>
        <div className="flex justify-center gap-8">
          <Button link="createbook" text="Add Book" />
          <Button link="editbook" text="Edit Book" />
    
        </div>
       </div>
      </div>
    </>
  );
};

export default Dashboard;
