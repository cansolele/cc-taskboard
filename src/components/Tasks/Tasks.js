import style from "./Tasks.module.css";
import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
const Tasks = () => {
  return (
    <div className={style.tasksboard_container}>
      <div className={style.task_box_container}>
        <h1 className={style.task_title}>IMP::URG</h1>
        <div className={style.task_details_container}>
          <div className={style.task_name}>
            <label>
              <input type="checkbox" /> <h2>Чат-бот Джефф</h2>
            </label>
          </div>
          <div className={style.task_details}>
            <h3 className={style.subtask}>Задачи:</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />{" "}
                  <h4 className={style.name_of_subtask}>Задача 1</h4>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />{" "}
                  <h4 className={style.name_of_subtask}>Задача 2</h4>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />{" "}
                  <h4 className={style.name_of_subtask}>Задача 3</h4>
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
    </div>
  );
};

export default Tasks;
