const Task = require("../model/task.model");
const taskService = require("../services/task.service");
const { validationResult } = require("express-validator");

//module for create task
module.exports.newTask = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);

  const { taskName, description, markAsDone } = req.body;

  try {
    const task = await taskService.createTask({
      taskName,
      description,
      markAsDone,
    });
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//module for show all tasks
module.exports.getAllTasks = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const tasks = await taskService.fetchAllTasks();
    res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//module for mark task as done
module.exports.markTaskAsDone = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await taskService.markTaskAsDone(id);
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await taskService.deleteTask(id);
    res.status(200).json({ deletedTask });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
