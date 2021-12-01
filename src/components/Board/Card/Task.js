import style from "./Task.module.css";
import SubTasks from "./SubTasks";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSubTask } from "../../../store/boardSlice";
import Tags from "./Tags";
import Deadlines from "./Deadlines";
const Task = ({ task, borderColor }) => {
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
      <div
        style={{ borderBottom: "2px " + borderColor + " solid" }}
        className={style.task_name_container}
      >
        <form className={style.task_name_form}>
          <label>
            <input type="checkbox" defaultChecked={task.completed} />
            <input value={task.taskName} className={style.task_name_input} />
          </label>
          <button className={style.triple_colon_button}>
            <span className={style.triple_colon_icon}>⁝</span>
          </button>
        </form>
      </div>
      <div className={style.task_details}>
        <h3 className={style.subtask_info}>Подзадачи:</h3>
        <ul>
          {task.subTasks?.map((subTask) => (
            <SubTasks key={subTask.id} subTask={subTask} />
          ))}
          <li>
            <form onSubmit={addSubTaskAction}>
              <input
                style={
                  task.subTasks ? { marginLeft: "18px" } : { marginLeft: "0px" }
                }
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
        <form className={style.note_input_form}>
          <TextareaAutosize
            className={style.note_input}
            placeholder="Добавьте заметки..."
            spellCheck="false"
            value={task.notes}
          />
        </form>
        <h3 className={style.subtask_info}>Теги:</h3>
        <Tags tags={task.taskTags} />
        <h3 className={style.subtask_info}>Временные рамки:</h3>
        <Deadlines />
      </div>
    </div>
  );
};
export default Task;
