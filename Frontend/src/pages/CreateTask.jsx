import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
const CreateTask = () => {
  return (
    <>
      <div className=" bg-cover bg-no-repeat bg-center bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <Title />
        <div className="h-screen w-full flex flex-col items-center ">
        <div className="p-4  sm:w-96 mt-4  bg-white/10 backdrop-blur-md border border-white/40 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-md font-bold text-center m-4 text-white">
              Create a New Todo
            </h2>
            <div className="flex flex-col ">
            <label for="title" className="text-xl font-medium text-white">
              Title
            </label>
            <input
              type="text"
              className="p-4 sm:px-4 sm:py-2 rounded-md text-xl border-4 border-transparent focus:border-green-700 focus:outline-none mt-4 mb-4"
              id="title"
              placeholder="Task Name"
            />

           <label for="description" className="text-xl font-medium text-white">
              Description
            </label>
            <textarea
              row="4"
              cols="25"
              id="description"
              className="mt-4 p-4 sm:px-4 sm:py-1 rounded-md text-xl border-4 border-transparent focus:border-green-700 focus:outline-none "
              placeholder="Description"
              style={{ maxHeight: "200px", minHeight: "100px" }}
            ></textarea>
            </div>
            <Link
              to="/all-tasks"
              className="flex items-center justify-center  bg-green-700 text-white text-xl font-medium text-center sm:px-2 px-3 py-4 text-xl mt-8 mb-2 mx-4 rounded-lg "
            >
              <div className="text-center sm:px-20 px-24 mx-4 ">Add Task</div>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
