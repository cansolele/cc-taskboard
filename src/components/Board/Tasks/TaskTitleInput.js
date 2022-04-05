import style from "./TaskTitleInput.module.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
const TaskTitleInput = ({ borderColor, title, exec }) => {
  return (
    <div
      style={{ borderBottom: "2px " + borderColor + " solid" }}
      className={style.task_name_container}
    >
      <form className={style.task_name_form}>
        <label>
          <input
            className={style.hidden_checkbox}
            type="checkbox"
            defaultChecked={exec}
          />
          <div className={style.custom_checkbox}>
            <svg
              className={style.checkmark_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
              />
            </svg>
          </div>
        </label>
        <TextareaAutosize
          value={title}
          spellCheck="false"
          maxLength="60"
          className={style.task_name_input}
        />

        <button className={style.triple_colon_button}>
          <span className={style.triple_colon_icon}>⁝</span>
        </button>
      </form>
    </div>
  );
};
export default TaskTitleInput;
