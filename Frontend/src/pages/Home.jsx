import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
const Home = () => {
  return (
    <>
      <div className="text-center bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1734897384296-5fa24874ffd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbHBhcGVyJTIwd2ludGVyfGVufDB8fDJ8fHww')] h-screen">
        <div className="h-screen">
          <Title />
          <div className="flex flex-col mt-8 m-8  ">
            <Link
              to="/add-task"
              className="flex items-center justify-start  bg-white hover:bg-gray-200 text-black text-xl font-medium w-full py-4 sm:w-1/3  sm:py-2 text-xl mt-2 mb-2 rounded-md"
            >
              <i className="fa-solid fa-circle-plus px-4 text-2xl text-gray-600 pr-8"></i>
              <div className="text-center">Add Task</div>
            </Link>
            <Link
              to="/all-tasks"
              className="flex items-center justify-start  bg-blue-500 hover:bg-blue-600 text-white text-xl font-medium w-full py-4 sm:w-1/3 sm:py-2  text-xl mt-2 mb-2 rounded-md"
            >
              <i className="fa-solid fa-list-check px-4 pr-8"></i>
              <div className="text-center">Show Task</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
