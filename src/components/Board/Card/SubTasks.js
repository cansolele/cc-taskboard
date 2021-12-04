import style from "./SubTasks.module.css";
import { IconContext } from "react-icons";
import { BsPlusLg } from "react-icons/bs";
const SubTasks = ({ subTask }) => {
  return (
    <li className={style.subtasks_li_container}>
      <div className={style.item_container}>
        <label>
          <input
            className={style.hidden_checkbox}
            type="checkbox"
            defaultChecked={subTask.completed}
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
        <h4 className={style.name_of_subtask}>{subTask.subTaskName}</h4>
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
        {subTask.subTaskTags?.map((tag) => (
          <div
            style={{ backgroundColor: tag.tagColor }}
            className={style.subtask_tag}
          >
            {tag.tagName}
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
