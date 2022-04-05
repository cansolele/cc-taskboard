import style from "./Notes.module.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
const Notes = ({ notes }) => {
  return (
    <form className={style.note_input_form}>
      <TextareaAutosize
        className={style.note_input}
        placeholder="Добавьте заметки..."
        spellCheck="false"
        value={notes}
      />
    </form>
  );
};
export default Notes;
