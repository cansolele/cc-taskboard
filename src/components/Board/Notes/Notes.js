import style from "./Notes.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeNote } from "../../../store/boardSlice";
import TextareaAutosize from "@mui/base/TextareaAutosize";
const Notes = ({ board_id, card_id, task_id, notes }) => {
  const dispatch = useDispatch();
  const [inputNotes, setInputNotes] = useState(notes);
  const changeNoteAction = () => {
    if (inputNotes !== notes) {
      const params = {
        inputNotes: inputNotes,
        board_id: board_id,
        card_id: card_id,
        task_id: task_id,
      };
      dispatch(changeNote(params));
    } else {
      setInputNotes(notes);
    }
  };
  return (
    <form className={style.note_input_form}>
      <TextareaAutosize
        className={style.note_input}
        placeholder="Добавьте заметки..."
        spellCheck="false"
        value={inputNotes}
        onChange={(e) => setInputNotes(e.target.value)}
        onBlur={changeNoteAction}
      />
    </form>
  );
};
export default Notes;
