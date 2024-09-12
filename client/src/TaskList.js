// src/components/TaskList.js
import React from "react";
import axios from "axios";
import "./TaskList.css"; // Import your regular CSS file

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      onDeleteTask(id);
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      const res = await axios.patch(`http://localhost:5000/tasks/${id}`, {
        completed: !completed,
      });
      onToggleComplete(res.data);
    } catch (err) {
      console.error("Error toggling task completion:", err);
    }
  };

  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <li className="task-item">No tasks available.</li>
      ) : (
        tasks.map((task) => (
          <li key={task._id} className="task-item">
            <h3 className={`task-name ${task.completed ? "completed" : ""}`}>
              {task.name}
            </h3>
            <p className="task-description">{task.description}</p>
            <div className="task-actions">
              <label className="task-checkbox">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    handleToggleComplete(task._id, task.completed)
                  }
                />
                Completed
              </label>
              <button
                onClick={() => handleDelete(task._id)}
                className="task-delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
