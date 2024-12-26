import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import CreateTask from "./pages/CreateTask";
import ShowAllTask from "./pages/ShowAllTask";
import Title from "./components/Title";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-task" element={<CreateTask />} />
        <Route path="/all-tasks" element={<ShowAllTask />} />
      </Routes>
    </div>
  );
};

export default App;
