import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tasks = ({
  tasksResult,
  handleChecked,
  tasksDB,
  handleDeleteTask,
  handleSubmit,
  task,
  handleAddTask,
}) => {
  return (
    <>
      <div className="tasks">
        {tasksResult.map((task, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={task[1]} // Check whether a checkbox is checked or not
                id={`task${index}`} // Link label and input field
                onChange={() => handleChecked(index)}
              ></input>
              <label
                htmlFor={`task${index}`}
                style={{ textDecoration: tasksDB[index][1] && "line-through" }} // Strike out text when a chekbox is checked
              >
                {" "}
                {task[0]}
              </label>
              <FontAwesomeIcon
                icon="trash"
                onClick={() => handleDeleteTask(index)}
                className="trash"
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
          required
        />
        <button type="submit">Add task</button>
      </form>
    </>
  );
};

export default Tasks;
