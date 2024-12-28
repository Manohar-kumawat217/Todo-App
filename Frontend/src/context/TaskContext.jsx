import React, { createContext, useState } from "react";

export const TaskDataContext = createContext();

const TaskContext = ({ children }) => {
  const [task, setTask] = useState({
    task: "",
    description: "",
    markAsDone: false,
  });
  return (
    <div>
      <TaskDataContext.Provider value={[task, setTask]}>
        {children}
      </TaskDataContext.Provider>
    </div>
  );
};

export default TaskContext;
