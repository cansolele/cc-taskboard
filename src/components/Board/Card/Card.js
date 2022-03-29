import style from "./Card.module.css";
import { IconContext } from "react-icons";
import TextareaAutosize from "react-textarea-autosize";
import { BsPlusLg } from "react-icons/bs";
import Task from "./Task";
const Card = ({ card }) => {
  return (
    <div
      style={{ backgroundColor: card.background_color }}
      className={style.card_container}
    >
      <form className={style.card_title_form}>
        <TextareaAutosize
          className={style.card_title}
          style={{
            backgroundColor: card.header_background_color,
            color: card.header_text_color,
          }}
          spellCheck="false"
          maxlength="60"
          value={card.title}
        />
        <button
          style={{ backgroundColor: card.header_background_color }}
          className={style.triple_colon_button}
        >
          <span className={style.triple_colon_icon}>⁝</span>
        </button>
      </form>

      {card.tasks?.map((task) => (
        <Task key={task.id} task={task} borderColor={card.background_color} />
      ))}
      <button className={style.add_task_btn}>
        <IconContext.Provider value={{ className: style.add_task_btn_icon }}>
          <BsPlusLg />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default Card;
