// src/components/TaskForm.js
import React, { useState } from "react";
import axios from "axios";
import "./TaskForm.css"; // Import your regular CSS file

const TaskForm = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { name, description };
    try {
      const res = await axios.post("http://localhost:5000/tasks", task);
      onAddTask(res.data); // Add new task to the list
      setName("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="task-form-container">
      <h1 className="task-form-header">TO-DO List App</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="task-input"
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-textarea"
        />
        <button type="submit" className="task-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
