import React, { createContext, useState } from "react";

//context for passing user data to the components
export const TodoDataContext = createContext();

const TodoContext = ({ children }) => {
  const [todo, setTodo] = useState({
    task: "",
    description: "",
    markAsDone: false,
  });
  return (
    <>
      <TodoDataContext.Provider value={{ todo, setTodo }}>
        {children}
      </TodoDataContext.Provider>
    </>
  );
};

export default TodoContext;
