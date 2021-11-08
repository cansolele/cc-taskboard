import style from "./Tasks.module.css";
import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
const Tasks = () => {
  return (
    <div className={style.tasks_container}>
      <div className={style.task_container}>
        <div className={style.task_title}>IMP::URG</div>
        <div className={style.task}>
          <div className={style.task_name}>
            <label>
              <input type="checkbox" /> Чат-бот Джефф
            </label>
          </div>
          <div className={style.task_details}>
            <p className={style.subtask}>Задачи:</p>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />{" "}
                  <span className={style.name_of_subtask}>Задача 1</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />{" "}
                  <span className={style.name_of_subtask}>Задача 2</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />{" "}
                  <span className={style.name_of_subtask}>Задача 3</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <button className={style.add_task_btn}>
          <IconContext.Provider value={{ className: style.add_task_btn_icon }}>
            <AiOutlinePlusCircle />
          </IconContext.Provider>
        </button>
      </div>
      <div className={style.task_container}></div>
    </div>
  );
};

export default Tasks;
