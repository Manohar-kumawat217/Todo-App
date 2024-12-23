const Task = require("../model/task.model");
const taskService = require("../services/task.service");
const { validationResult } = require("express-validator");

module.exports.newTask = async (req, res, next) => {
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
