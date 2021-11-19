import style from "./Board.module.css";
import Card from "./Card/Card";
const Board = () => {
  return (
    <div className={style.tasksboard_container}>
      <Card />
    </div>
  );
};

export default Board;
