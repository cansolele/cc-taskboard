import style from "./Board.module.css";
import Card from "./Card/Card";
const Board = (props) => {
  return (
    <div className={style.tasksboard_container}>
      <Card subTasks={props.subTasks} setSubTasks={props.setSubTasks} />
    </div>
  );
};

export default Board;
