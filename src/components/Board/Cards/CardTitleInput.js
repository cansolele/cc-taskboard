import style from "./CardTitleInput.module.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const CardTitleInput = ({ bgColor, textColor, title }) => {
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
        value={title}
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
