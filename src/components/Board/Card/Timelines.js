import React from "react";
import style from "./Timelines.module.css";

const Timelines = () => {
  return (
    <div className={style.timelines_container}>
      <div className={style.item_container}>
        <span>Ожидаемое время: </span>
        <button className={style.add_time}>Установить..</button>
      </div>
      <div className={style.item_container}>
        <span>Хорошее время: </span>
        <button className={style.add_time}>Установить..</button>
      </div>
    </div>
  );
};
export default Timelines;
