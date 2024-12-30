import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import axios from "axios";
import { TodoDataContext } from "../context/TodoContext";
import { Link, useNavigate } from "react-router-dom";

export default function ShowAllTask() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {  
    async function fetchData(){
    try{
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}todo/task`);
      if(response.status === 200){
        setTodos(response.data.tasks);
      }
    }catch(error){
      console.log(error);
    }
  }
    fetchData();
  },[]);

  const handleMarkAsDone  = async(id) => {
    try{
      //API request method
    //here we write the code for mark task as done
    const response = await axios.put(`${import.meta.env.VITE_BASE_URL}todo/task/${id}`);

    if(response.status === 200){
      const updatedtask = response.data.task;
      setTodos((prevTodos) =>(
        prevTodos.map((todo) => (todo._id === id ? updatedtask: todo))
      ))
    }
    }catch(error){
      console.log("Error updating Task",error);
    }
    
  };

  const handleDelete = async(id) => {
    try{
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}todo/task/${id}`);
      if(response.status === 200){
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      }
    }catch(error){
      console.log(error);
    }
    
  };
  // form ke load event me ye sab todos isme aane chahiye
  // useEffect hook use krege

  return (
      <div className="text-white h-screen bg-fixed bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1505635725851-c2cfe9e29112?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
        <Title />
        <h3 className="ml-4 mt-4 sm:text-start text-center text-3xl font-bold flex items-center">
          { todos.length === 0 ?"Add task":"All Tasks"}
          <Link
            to="/add-task"
            className="flex items-center justify-center text-white text-2xl font-medium text-xl mt-2 rounded-md w-8 ml-2"
          >
            <i className="fa-solid fa-circle-plus text-2xl text-white hover:text-yellow-500"></i>
          </Link>
          </h3>
        <div className=" sm:m-4 mx-8 mt-8  flex">
          <ul className="flex flex-wrap justify-evenly w-full p-4 bg-white/10 backdrop-blur-md border border-white/40 rounded-lg shadow-lg">
              {todos.map((todo) => (
                <li
                  className={`border-2 text-white m-4 w-96 rounded-xl p-5 hover:bg-blue-500 ${
                    todo.markAsDone ? " text-green-500" : ""
                  }`}
                  key={todo._id}
                >
                  <div className="flex flex-col w-full h-full">
                    <h2 className={`text-xl font-bold ${todo.markAsDone ? "line-through" : ""}`}>
                      {todo.taskName}
                    </h2>
                    <p className={`text-base font-medium my-2 ${todo.markAsDone ? "line-through" : ""}`}>
                      {todo.description}
                    </p>
                    {todo.markAsDone && <h1 className="text-green-700 font-bold text-2xl mb-2">Completed</h1>}
                    <div>
                      {!todo.markAsDone && (
                        <button
                          className="bg-green-600 hover:bg-green-800 p-2 px-4 rounded font-medium text-base text-white"
                          onClick={() => handleMarkAsDone(todo._id)}
                        >
                          Mark as Done
                        </button>
                      )}
                      <button
                        className="bg-red-600 hover:bg-red-800 p-2 px-4 rounded font-medium text-base text-white ml-4"
                        onClick={() => handleDelete(todo._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      

  );
}
