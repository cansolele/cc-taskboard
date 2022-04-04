import style from "./Board.module.css";
import Card from "./Card/Card";

const Board = ({ board }) => {
  return (
    <div
      className={style.tasksboard_container}
      style={{ backgroundColor: board.background_color }}
    >
      {board.cards?.map((card) => (
        <Card board_id={board.id} key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Board;
