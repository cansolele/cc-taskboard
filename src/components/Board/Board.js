import style from "./Board.module.css";
import Cards from "./Cards/Cards";

const Board = ({ board }) => {
  return (
    <div
      className={style.tasksboard_container}
      style={{ backgroundColor: board.background_color }}
    >
      {board.cards?.map((card) => (
        <Cards board_id={board.id} key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Board;
