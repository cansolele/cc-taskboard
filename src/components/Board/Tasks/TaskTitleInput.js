import style from "./TaskTitleInput.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTitleTask } from "../../../store/boardSlice";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { changeTaskStatus } from "../../../store/boardSlice";
const TaskTitleInput = ({
  board_id,
  card_id,
  task_id,
  borderColor,
  title,
  exec,
}) => {
  const dispatch = useDispatch();
  const [inputTaskTitle, setInputTaskTitle] = useState(title);
  const changeTitleTaskAction = (event) => {
    if (
      inputTaskTitle.replace(/[\s.,%]/g, "") !== "" &&
      inputTaskTitle !== title
    ) {
      const params = {
        inputTaskTitle: inputTaskTitle,
        board_id: board_id,
        card_id: card_id,
        task_id: task_id,
      };
      dispatch(changeTitleTask(params));
    } else {
      setInputTaskTitle(title);
    }
  };
  const changeTaskStatusAction = (isChecked) => {
    const params = {
      board_id: board_id,
      card_id: card_id,
      task_id: task_id,
      exec: isChecked,
    };
    dispatch(changeTaskStatus(params));
  };
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
            onChange={(e) => changeTaskStatusAction(e.target.checked)}
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
          value={inputTaskTitle}
          onChange={(e) => setInputTaskTitle(e.target.value)}
          onBlur={changeTitleTaskAction}
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
