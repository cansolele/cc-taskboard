import { useDispatch } from "react-redux";
import { postSubTask } from "../../../store/boardSlice";
import { useState } from "react";
import style from "./AddSubTaskInput.module.css";
const AddSubTaskInput = ({ board_id, card_id, task_id, isSubtasks }) => {
  const dispatch = useDispatch();
  const addSubTaskAction = (event) => {
    event.preventDefault();
    if (inputSubTask.replace(/[\s.,%]/g, "") !== "") {
      const params = {
        inputSubTask: inputSubTask,
        board_id: board_id,
        card_id: card_id,
        task_id: task_id,
      };
      dispatch(postSubTask(params));
      setInputSubTask("");
    }
  };
  const [inputSubTask, setInputSubTask] = useState("");
  return (
    <form onSubmit={addSubTaskAction}>
      <input
        style={isSubtasks ? { marginLeft: "18px" } : { marginLeft: "0px" }}
        type="text"
        className={style.subtask_input}
        placeholder="Добавьте подзадачу..."
        value={inputSubTask}
        onChange={(e) => setInputSubTask(e.target.value)}
      />
    </form>
  );
};
export default AddSubTaskInput;
