import style from "./CardTitleInput.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { changeTitleCard } from "../../../store/boardSlice";

const CardTitleInput = ({ board_id, card_id, bgColor, textColor, title }) => {
  const dispatch = useDispatch();
  const [inputCardTitle, setInputCardTitle] = useState(title);
  const changeTitleCardAction = () => {
    if (
      inputCardTitle.replace(/[\s.,%]/g, "") !== "" &&
      inputCardTitle !== title
    ) {
      const params = {
        inputCardTitle: inputCardTitle,
        board_id: board_id,
        card_id: card_id,
      };
      dispatch(changeTitleCard(params));
    } else {
      setInputCardTitle(title);
    }
  };
  return (
    <form className={style.card_title_form}>
      <TextareaAutosize
        className={style.card_title}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
        spellCheck="false"
        maxLength="60"
        value={inputCardTitle}
        onChange={(e) => setInputCardTitle(e.target.value)}
        onBlur={changeTitleCardAction}
      />
      <button
        style={{ backgroundColor: bgColor }}
        className={style.triple_colon_button}
      >
        <span className={style.triple_colon_icon}>⁝</span>
      </button>
    </form>
  );
};
export default CardTitleInput;
