import SubTasks from "./SubTasks";
import style from "./Task.module.css";
const Task = (props) => {
  const addSubTask = (event) => {
    event.preventDefault();
    if (props.inputSubTask.replace(/[\s.,%]/g, "") !== "") {
      props.setSubTasks([
        ...props.subTasks,
        {
          text: props.inputSubTask,
          id: Math.random() * 1000,
        },
      ]);
      props.setInputSubTask("");
    }
  };
  const inputSubTaskHandler = (event) => {
    props.setInputSubTask(event.target.value);
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
          {props.subTasks.map((subTask) => (
            <SubTasks key={subTask.id} text={subTask.text} />
          ))}
          <li>
            <form action="" onSubmit={addSubTask}>
              <input
                type="text"
                className={style.subtask_input}
                placeholder="Добавьте подзадачу..."
                value={props.inputSubTask}
                onChange={inputSubTaskHandler}
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
