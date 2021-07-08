import "./App.css";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash);

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  // Warning console for false value why ?
  const [checked, setChecked] = useState(false);

  const handleAddTask = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  const handleChecked = (index) => {
    setChecked(!checked);
    const newTasks = [...tasks];
    newTasks[index][1] = !checked;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.slice(0, index).concat(tasks.slice(index + 1));
    setTasks(newTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChecked(false);
    const newTasks = [...tasks];
    // Why it doesn't work with an object ?
    // newTasks.push({ task: task, checked: checked });
    newTasks.push([task, false]);
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="tasks">
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                id="task"
                ckecked={checked}
                onChange={() => handleChecked(index)}
              ></input>
              <label
                htmlFor="task"
                style={{ textDecoration: tasks[index][1] && "line-through" }}
              >
                {" "}
                {task}
              </label>
              <FontAwesomeIcon
                icon="trash"
                onClick={() => handleDeleteTask(index)}
              />
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New task"
          value={task}
          onChange={handleAddTask}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default App;
