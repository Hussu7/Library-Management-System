import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/Button/Button";

const Dashboard = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-screen  dark:text-white dark:bg-gray-800 dark:border-gray-700">
        <Navbar/>
       <div className="content h-96 flex flex-wrap flex-col gap-12 justify-center">
       <h1 className="text-3xl font-extrabold text-center ">
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
