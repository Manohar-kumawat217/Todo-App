const mongooose = require("mongoose");

//defining the schema
const taskSchema = new mongooose.Schema({
  taskName: {
    type: String,
    required: true,
    minLength: [3, "Task name should be atleast 3 characters long"],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Task description should be atleast 10 characters long"],
  },
  markAsDone: {
    type: Boolean,
    default: false,
  },
});

//creating a model task
const Task = new mongooose.model("task", taskSchema);

module.exports = Task;
