const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/todo_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

// Define Task model
const TaskSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model("Task", TaskSchema);

// Routes
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

// New route for updating task completion status
app.patch("/tasks/:id", async (req, res) => {
  const { completed } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    { completed },
    { new: true }
  );
  res.json(updatedTask);
});

app.listen(5000, () => console.log("Server started on port 5000"));
