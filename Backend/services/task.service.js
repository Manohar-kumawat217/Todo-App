// here wriiten code performs only one task which is to create a task in database
// ye function sirf task create karta hai database me

const Task = require("../model/task.model");

module.exports.createTask = async ({ taskName, description, markAsDone }) => {
  if (!taskName || !description) {
    throw new Error("All fields are required");
  }

  const task = Task.create({ taskName, description, markAsDone });

  return task;
};
