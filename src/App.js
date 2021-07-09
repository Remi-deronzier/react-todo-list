import "./App.css";
import { useState } from "react";
import Search from "./Components/Search";
import Tasks from "./Components/Tasks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [tasksDB, setTasksDB] = useState([]); // [["My first task",false], ["My second task",true]]
  // false = checkbox not checked
  // true = checkbox checked
  // tasksDB is the Data Base where all the tasks are stored and not changed when a value is entered in the input field
  const [task, setTask] = useState("");
  const [tasksResult, setTasksResult] = useState([]); // taskResult is the array which change when a value is entered in the input field

  // Add a new task
  const handleAddTask = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  // Strike out text when a checkbox is checked
  const handleChecked = (index) => {
    const newTasks = [...tasksDB];
    newTasks[index][1] = !newTasks[index][1];
    newTasks.sort((task1, task2) => {
      const bool1 = task1[1];
      const bool2 = task2[1];
      return bool1 === bool2 ? 0 : !bool1 ? -1 : 1;
    });
    setTasksDB(newTasks);
    setTasksResult(newTasks);
  };

  // Delete a task
  const handleDeleteTask = (index) => {
    const newTasks = tasksDB.slice(0, index).concat(tasksDB.slice(index + 1));
    setTasksDB(newTasks);
    setTasksResult(newTasks);
  };

  // Search a task
  const handleSearch = (e) => {
    const value = e.target.value;
    const newSearchTasks = tasksDB.filter(
      (task) => task[0].indexOf(value) !== -1
    );
    setTasksResult(newSearchTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTasks = [...tasksDB];

    /* IMPROVEMENT IDEA
    Why it doesn't work with an object ?
    newTasks.push({ task: task, checked: checked }); */

    newTasks.push([task, false]);
    setTasksDB(newTasks);
    setTask(""); // Reset input field "New task"
    setTasksResult(newTasks);
    console.log(tasksResult);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Tasks
        tasksResult={tasksResult}
        handleChecked={handleChecked}
        tasksDB={tasksDB}
        handleDeleteTask={handleDeleteTask}
        handleSubmit={handleSubmit}
        task={task}
        handleAddTask={handleAddTask}
      />
    </div>
  );
}

export default App;
