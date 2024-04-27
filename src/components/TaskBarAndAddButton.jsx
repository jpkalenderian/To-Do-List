import { useState } from "react";

export default function TaskBarAndAddButton({ setList }) {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (newTask.trim() != "") {
      setList(newTask);
      setNewTask("");
    }
  };

  return (
    <div id="container">
      <input
        className="form-control"
        id="task-input"
        type="text"
        value={newTask}
        onChange={handleChange}
      />
      <button
        className="btn btn-primary"
        id="add-button"
        type="button"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}
