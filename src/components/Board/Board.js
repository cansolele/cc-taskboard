import style from "./Board.module.css";
import Card from "./Card/Card";
const Board = (props) => {
  return (
    <div className={style.tasksboard_container}>
      <Card
        inputSubTask={props.inputSubTask}
        setInputSubTask={props.setInputSubTask}
        subTasks={props.subTasks}
        setSubTasks={props.setSubTasks}
      />
    </div>
  );
};

export default Board;
