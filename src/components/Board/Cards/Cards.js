import style from "./Cards.module.css";
import { IconContext } from "react-icons";
import CardTitleInput from "./CardTitleInput";
import { BsPlusLg } from "react-icons/bs";
import Tasks from "../Tasks/Tasks";
const Cards = ({ card, board_id }) => {
  return (
    <div
      style={{ backgroundColor: card.background_color }}
      className={style.card_container}
    >
      <CardTitleInput
        bgColor={card.header_background_color}
        textColor={card.header_text_color}
        title={card.title}
      />
      {card.tasks?.map((task) => (
        <Tasks
          board_id={board_id}
          card_id={card.id}
          key={task.id}
          task={task}
          borderColor={card.background_color}
        />
      ))}
      <button className={style.add_task_btn}>
        <IconContext.Provider value={{ className: style.add_task_btn_icon }}>
          <BsPlusLg />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default Cards;
