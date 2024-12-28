import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { TodoDataContext } from "../context/TodoContext";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [markAsDone, setMarkAsDone] = useState(false);

  //useState for keep task Data in object form which we pass to backend
  const [taskData, setTaskData] = useState({});

  const navigate = useNavigate();
  // use the data from context
  const { todo, setTodo } = React.useContext(TodoDataContext);

  //after the submission of the form state variables are have to be reset
  const submitHandler = async (event) => {
    event.preventDefault();

    const newTask = {
      taskName: task,
      description: description,
      markAsDone: markAsDone
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/todo/task`,
      newTask
    );

    if(response.status === 201){
      const data = response.data;
      setTodo(data.todo); // set the data to the context
      navigate("/add-task");
      setTask("");
      setDescription("");
    };
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center ">
        <div className=" p-4  sm:w-96 mt-4  bg-white/10 backdrop-blur-md border border-white/40 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-md font-bold text-center m-4 text-white">
              Create a New Todo
            </h2>
            {/* Form start */}
            <form
              action=""
              onSubmit={(event) => {
                submitHandler(event);
              }}
            >
              <div className="flex flex-col ">
                <label
                  htmlFor="title"
                  className="text-xl font-medium text-white"
                >
                  Title
                </label>
                <input
                  required
                  minLength={3}
                  type="text"
                  className="p-4 sm:px-4 sm:py-2 rounded-md text-xl border-4 border-transparent focus:border-green-700 focus:outline-none mt-4 mb-4"
                  id="title"
                  placeholder="Task Name"
                  value={task}
                  onChange={(event) => {
                    setTask(event.target.value);
                  }}
                />

                <label
                  htmlFor="description"
                  className="text-xl font-medium text-white"
                >
                  Description
                </label>
                <textarea
                  required
                  minLength={10}
                  row="4"
                  cols="25"
                  id="description"
                  className="mt-4 mb-4 p-4 sm:px-4 sm:py-1 rounded-md text-xl border-4 border-transparent focus:border-green-700 focus:outline-none "
                  placeholder="Description"
                  style={{ maxHeight: "200px", minHeight: "100px" }}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                  value={description}
                ></textarea>
              </div>

              {/* Submit Button */}

              <div className="flex flex-col justify-evenly">
                <button className=" flex items-center justify-center bg-green-700 hover:bg-green-800 text-white text-2xl font-medium text-center sm:px-2 px-3 py-3 text-xl mt-2 rounded-md ">
                  Add Task
                </button>
                <Link
                  to="/all-tasks"
                  className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white text-2xl font-medium text-center py-3 sm:px-2 px-3  text-xl mt-2 rounded-md"
                >
                  <div className="text-center">Show Task</div>
                </Link>
              </div>
            </form>
            {/* Form end */}
          </div>
        </div>
      </div>
    </>
  );
}
