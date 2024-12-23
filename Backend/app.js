const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db");
const taskRoutes = require("./routes/task.routes");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/todo", taskRoutes);
module.exports = app;
