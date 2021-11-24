import style from "./SubTasks.module.css";
const SubTasks = ({ subTask }) => {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={subTask.completed} />{" "}
        <h4 className={style.name_of_subtask}>{subTask.subTaskName}</h4>
      </label>
    </li>
  );
};
export default SubTasks;
