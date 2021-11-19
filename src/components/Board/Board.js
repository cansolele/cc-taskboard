import style from "./Board.module.css";
import Card from "./Card/Card";
import { useSelector } from "react-redux";

const Board = () => {
  const cards = useSelector((state) => state.board.board.cards);
  return (
    <div className={style.tasksboard_container}>
      {cards?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Board;
