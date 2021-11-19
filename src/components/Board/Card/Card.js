import style from "./Card.module.css";
import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Task from "./Task";
const Card = ({ card }) => {
  return (
    <div className={style.card_container}>
      <h1 className={style.card_title}>{card.title}</h1>
      {card.tasks?.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <button className={style.add_task_btn}>
        <IconContext.Provider value={{ className: style.add_task_btn_icon }}>
          <AiOutlinePlusCircle />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default Card;
