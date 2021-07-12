import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tasks = ({
  tasksResult,
  handleChecked,
  handleDeleteTask,
  handleSubmit,
  task,
  handleAddTask,
  darkMode,
}) => {
  return (
    <>
      <div className="tasks">
        {tasksResult.map((task, index) => {
          return (
            <div key={index} className="task">
              <input
                className="input-checkbox"
                type="checkbox"
                checked={task.done} // Check whether a checkbox is checked or not
                id={`task${index}`} // Link label and input field
                onChange={() => handleChecked(index)}
              ></input>
              <label
                className={darkMode ? "white lb-checkbox" : "lb-checkbox"}
                htmlFor={`task${index}`}
                style={{
                  textDecoration: task.done && "line-through",
                }} // Strike out text when a chekbox is checked
              >
                {" "}
                {task.name}
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
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input-new-task"
          type="text"
          placeholder="New task"
          value={task}
          onChange={handleAddTask}
          required
        />
        <button type="submit" className="btn-add-task">
          Add task
        </button>
      </form>
    </>
  );
};

export default Tasks;
