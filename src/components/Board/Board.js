import style from "./Board.module.css";
import Card from "./Card/Card";
import { useSelector } from "react-redux";

const Board = () => {
  const cards = useSelector((state) => state.board.board.cards);
  const boardBackGroundColor = useSelector(
    (state) => state.board.board.background_color
  );
  return (
    <div
      className={style.tasksboard_container}
      style={{ backgroundColor: boardBackGroundColor }}
    >
      {cards?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Board;
