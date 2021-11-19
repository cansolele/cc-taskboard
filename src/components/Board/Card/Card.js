import style from "./Card.module.css";
import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Task from "./Task";
const Card = () => {
  return (
    <div className={style.card_container}>
      <h1 className={style.card_title}>IMP::URG</h1>
      <Task />
      <button className={style.add_task_btn}>
        <IconContext.Provider value={{ className: style.add_task_btn_icon }}>
          <AiOutlinePlusCircle />
        </IconContext.Provider>
      </button>
    </div>
  );
};
export default Card;
