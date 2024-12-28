import React, { useEffect, useState } from "react";
import Title from "../components/Title";
export default function ShowAllTask() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {});
  const handleMarkAsDone = () => {
    //API request method
    //here we write the code for mark task as done
  };

  const handleDelete = () => {
    //API request method
    //here we write the code of deleting a task
  };
  // form ke load event me ye sab todos isme aane chahiye
  // useEffect hook use krege
  return (
    <>
      <div className=" bg-cover bg-no-repeat bg-center bg-[url('https://images.unsplash.com/photo-1505635725851-c2cfe9e29112?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <Title />
        <h3>All tasks</h3>
        <div className="h-screen w-full flex flex-col items-center ">
          <div>
            <ul>
              {todos.map((todo) => (
                <li>
                  <div>
                    <h2>{todo.task}</h2>
                    <p>{todo.description}</p>
                    <div>
                      <button onClick={handleMarkAsDone}>Mark as Done</button>
                      <button onClick={handleDelete}>Delete</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
