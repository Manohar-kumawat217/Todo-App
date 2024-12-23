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

// ye function database me se sare tasks fetch karta hai
module.exports.fetchAllTasks = async () => {
  const allTasks = await Task.find({});
  return allTasks;
};

//ye function task ko mark as done karta hai
module.exports.markTaskAsDone = async (id) => {
  const markTask = await Task.findByIdAndUpdate(
    id,
    { markAsDone: true },
    { new: true }
  );
  return markTask;
};

module.exports.deleteTask = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);
  console.log(deletedTask);
  return deletedTask;
};
