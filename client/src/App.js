// src/App.js
import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import axios from "axios";
import "./App.css"; // Import your regular CSS file

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch all tasks when the component is mounted
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to the list
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task._id !== id)); // Remove task from list
  };

  const toggleComplete = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };

  return (
    <div className="app-container">
      <div className="grid-container">
        <div className="contact-left">
          <TaskForm onAddTask={addTask} />
        </div>
        <div className="contact-right">
          <img
            src="assets/image.avif" // Update the path according to your public directory structure
            alt="Task illustration"
            className="image"
          />
        </div>
      </div>
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
