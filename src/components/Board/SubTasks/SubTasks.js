import style from "./SubTasks.module.css";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import { changeSubTaskTitle } from "../../../store/boardSlice";
import { changeSubTaskStatus } from "../../../store/boardSlice";
const SubTasks = ({ board_id, card_id, task_id, subTask }) => {
  const [inputSubTask, setInputSubTask] = useState(subTask.title);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const editSubTaskTitleAction = () => {
    if (
      inputSubTask.replace(/[\s.,%]/g, "") !== "" &&
      inputSubTask !== subTask.title
    ) {
      const params = {
        inputSubTask: inputSubTask,
        board_id: board_id,
        card_id: card_id,
        task_id: task_id,
        subtask_id: subTask.id,
      };
      setIsEdit(false);
      dispatch(changeSubTaskTitle(params));
    } else {
      setInputSubTask(subTask.title);
      setIsEdit(false);
    }
  };
  const editSubTaskStatusAction = (isChecked) => {
    const params = {
      board_id: board_id,
      card_id: card_id,
      task_id: task_id,
      subtask_id: subTask.id,
      exec: isChecked,
    };
    dispatch(changeSubTaskStatus(params));
  };
  return (
    <li className={style.subtasks_li_container}>
      <div className={style.item_container}>
        <label>
          <input
            className={style.hidden_checkbox}
            type="checkbox"
            onChange={(e) => editSubTaskStatusAction(e.target.checked)}
            defaultChecked={subTask.exec}
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
        {isEdit ? (
          <TextareaAutosize
            value={inputSubTask}
            spellCheck="false"
            maxLength="60"
            onChange={(e) => setInputSubTask(e.target.value)}
            onBlur={editSubTaskTitleAction}
            className={style.name_of_subtask}
          />
        ) : (
          <span
            onClick={() => setIsEdit(true)}
            className={style.name_of_subtask}
          >
            {inputSubTask}
          </span>
        )}

        <div className={style.subtask_buttons}>
          {" "}
          {!subTask.subTaskTags && (
            <button className={style.add_tag_btn}>
              <IconContext.Provider
                value={{ className: style.add_tag_btn_icon }}
              >
                <BsPlusLg />
              </IconContext.Provider>
            </button>
          )}
          <button className={style.triple_colon_button}>
            <span className={style.triple_colon_icon}>⁝</span>
          </button>
        </div>
      </div>

      <div className={style.subtasks_tags_container}>
        {subTask.tags?.map((tag) => (
          <div
            style={{
              backgroundColor: tag.background_color,
              color: tag.text_color,
            }}
            className={style.subtask_tag}
          >
            {tag.title}
          </div>
        ))}
        {subTask.subTaskTags && (
          <button className={style.add_tag_btn}>
            <IconContext.Provider value={{ className: style.add_tag_btn_icon }}>
              <BsPlusLg />
            </IconContext.Provider>
          </button>
        )}
      </div>
    </li>
  );
};
export default SubTasks;
