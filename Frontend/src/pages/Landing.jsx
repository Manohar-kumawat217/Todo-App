import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="h-screen w-full bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1734897384296-5fa24874ffd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbHBhcGVyJTIwd2ludGVyfGVufDB8fDJ8fHww')] ">
      <div className="flex flex-col justify-center items-start w-full  px-8 pt-6 font-bold text-4xl text-white">
          <div className="flex itmes-center ">
            <Link to="/home" className="flex items-center ">
              <div className="bg-yellow-400 p-2.5 sm:p-1.5 flex items-center justify-center  text-gray-800 rounded-full">
              <i className="fa-solid fa-pen-nib"></i>
              </div>
            </Link>
            <div className="ml-4 mt-2 ">Todo App</div>
          </div>
          <div className=" flex flex-col  h-1/3 text-xl text-white font-bold justify-center mt-32">
        <div className="text-3xl font-bold">
          Get Started with Todo App
        </div>
        <Link
          to="/home"
          className="flex justify-center items-center w-32 border-2 border-white bg-transparent rounded-md text-sm mt-6 py-2 font-bold hover:bg-white hover:text-black "
        >
          <div>Continue</div>
        </Link>
      </div>        
      </div>

      
    </div>
  );
};

export default Landingpage;
