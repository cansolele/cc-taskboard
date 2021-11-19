import style from "./Task.module.css";
import SubTasks from "./SubTasks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubTask } from "../../../store/cardSlice";
const Task = () => {
  const [inputSubTask, setInputSubTask] = useState("");
  const subTasks = useSelector((state) => state.cards.subTasks);
  const dispatch = useDispatch();

  const addSubTaskAction = (event) => {
    event.preventDefault();
    if (inputSubTask.replace(/[\s.,%]/g, "") !== "") {
      dispatch(addSubTask({ inputSubTask }));
      setInputSubTask("");
    }
  };

  return (
    <div className={style.task_container}>
      <div className={style.task_name}>
        <label>
          <input type="checkbox" /> <h2>Чат-бот Джефф</h2>
        </label>
      </div>
      <div className={style.task_details}>
        <h3 className={style.subtask_info}>Подзадачи:</h3>
        <ul>
          {subTasks.map((subTask) => (
            <SubTasks key={subTask.id} text={subTask.text} />
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
        <p className={style.note}>
          Curabitur consequat ultrices commodo. Cras ornare in dolor fermentum
          posuere. Vestibulum tempor mauris odio, vitae feugiat leo semper eu.
          Nam consequat congue scelerisque. Duis eget condimentum sem. Sed quam
          ipsum, pretium condimentum diam dictum, pharetra vulputate nunc.
          Vivamus sapien justo, placerat non auctor et, pharetra molestie quam.
          In finibus, risus tempor dignissim vulputate, elit metus finibus
          sapien, vitae lacinia dui turpis eget sem
        </p>
        <h3 className={style.subtask_info}>Теги:</h3>
      </div>
    </div>
  );
};
export default Task;
