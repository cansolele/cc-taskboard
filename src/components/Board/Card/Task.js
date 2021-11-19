import style from "./Task.module.css";
import SubTasks from "./SubTasks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSubTask } from "../../../store/boardSlice";
const Task = ({ task }) => {
  const [inputSubTask, setInputSubTask] = useState("");
  const dispatch = useDispatch();

  const addSubTaskAction = (event) => {
    event.preventDefault();
    if (inputSubTask.replace(/[\s.,%]/g, "") !== "") {
      dispatch(postSubTask(inputSubTask));
      setInputSubTask("");
    }
  };

  return (
    <div className={style.task_container}>
      <div className={style.task_name}>
        <label>
          <input type="checkbox" /> <h2>{task.taskName}</h2>
        </label>
      </div>
      <div className={style.task_details}>
        <h3 className={style.subtask_info}>Подзадачи:</h3>
        <ul>
          {task.subTasks?.map((subTask) => (
            <SubTasks key={subTask.id} subTask={subTask} />
          ))}
          <li>
            <form action="" onSubmit={addSubTaskAction}>
              <input
                type="text"
                className={style.subtask_input}
                placeholder="Добавьте подзадачу..."
                value={inputSubTask}
                onChange={(e) => setInputSubTask(e.target.value)}
              />
            </form>
          </li>
        </ul>
        <h3 className={style.subtask_info}>Заметки:</h3>
        <p className={style.note}>{task.notes}</p>
        <h3 className={style.subtask_info}>Теги:</h3>
      </div>
    </div>
  );
};
export default Task;
