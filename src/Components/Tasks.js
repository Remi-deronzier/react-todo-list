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
            <div key={index} className="task">
              <input
                className="input-checkbox"
                type="checkbox"
                checked={task[1]} // Check whether a checkbox is checked or not
                id={`task${index}`} // Link label and input field
                onChange={() => handleChecked(index)}
              ></input>
              <label
                className="lb-checkbox"
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
