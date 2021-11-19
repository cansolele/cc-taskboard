import style from "./SubTasks.module.css";
const SubTasks = (props) => {
  return (
    <li key={props.key}>
      <label>
        <input type="checkbox" />{" "}
        <h4 className={style.name_of_subtask}>{props.text}</h4>
      </label>
    </li>
  );
};
export default SubTasks;
