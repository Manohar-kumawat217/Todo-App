import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import CreateTask from "./pages/CreateTask";
import ShowAllTask from "./pages/ShowAllTask";
import { TodoDataContext } from "./context/TodoContext";
import Page_404 from "./pages/Page_404";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-task" element={<CreateTask />} />
        <Route path="/all-tasks" element={<ShowAllTask />} />
        <Route path="*" element={<Page_404/>}></Route>
      </Routes>
    </>
  );
};

export default App;
