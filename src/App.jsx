import React, { useState } from "react";
import TaskBarAndAddButton from "./components/TaskBarAndAddButton.jsx";
import TaskList from "./components/TaskList.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleDeleteClick = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);
  };

  const handleCheckboxChange = (index) => {
    const updatedList = [...taskList];
    const task = updatedList.splice(index, 1)[0];
    task.completed = !task.completed;

    if (task.completed) {
      updatedList.push(task);
    } else {
      updatedList.unshift(task);
    }

    setTaskList(updatedList);
  };

  const setList = (newTask) => {
    setTaskList([
      ...taskList,
      {
        task: newTask,
        completed: false,
      },
    ]);
  };

  return (
    <>
      <TaskBarAndAddButton setList={setList} />
      <TaskList
        items={taskList.map((task, index) => (
          <li
            className={`list-group-item ${
              task.completed ? "completed-task" : ""
            }`}
            id="list-item"
            key={index}
          >
            <div className="list-content">
              <input
                className="form-check-input"
                id="checkbox"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <span
                className="task-text"
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.task}
              </span>
            </div>
            <button
              className="btn btn-danger"
              id="delete-button"
              onClick={() => handleDeleteClick(index)}
            >
              Delete
            </button>
          </li>
        ))}
      />
    </>
  );
}
