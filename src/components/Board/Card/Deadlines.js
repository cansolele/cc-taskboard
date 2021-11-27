import React from "react";
import style from "./Deadlines.module.css";

const Deadlines = () => {
  return (
    <div className={style.deadlines_container}>
      <div className={style.item_container}>
        <span>Ожидаемое время: </span>
        <button className={style.add_deadline}>Установить..</button>
      </div>
      <div className={style.item_container}>
        <span>Хорошее время: </span>
        <button className={style.add_deadline}>Установить..</button>
      </div>
    </div>
  );
};
export default Deadlines;
