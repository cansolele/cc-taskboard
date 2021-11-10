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
            <h3 className={style.subtask_info}>Задачи:</h3>
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
            <h3 className={style.subtask_info}>Заметки:</h3>
            <p className={style.note}>
              Curabitur consequat ultrices commodo. Cras ornare in dolor
              fermentum posuere. Vestibulum tempor mauris odio, vitae feugiat
              leo semper eu. Nam consequat congue scelerisque. Duis eget
              condimentum sem. Sed quam ipsum, pretium condimentum diam dictum,
              pharetra vulputate nunc. Vivamus sapien justo, placerat non auctor
              et, pharetra molestie quam. In finibus, risus tempor dignissim
              vulputate, elit metus finibus sapien, vitae lacinia dui turpis
              eget sem
            </p>
            <h3 className={style.subtask_info}>Теги:</h3>
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
