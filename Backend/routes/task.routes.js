const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const taskController = require("../controller/task.controller");

router.post(
  "/task",
  [
    body("taskName")
      .isLength({ min: 3 })
      .withMessage("Task name should be atleast 3 characters long"),
    body("description")
      .isLength({ min: 10 })
      .withMessage("Task description should be atleast 10 characters long"),
  ],
  taskController.newTask
);

module.exports = router;
