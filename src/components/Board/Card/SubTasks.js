import style from "./SubTasks.module.css";
const SubTasks = ({ text }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />{" "}
        <h4 className={style.name_of_subtask}>{text}</h4>
      </label>
    </li>
  );
};
export default SubTasks;
