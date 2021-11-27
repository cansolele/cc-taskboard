import React from "react";
import style from "./Tags.module.css";

const Tags = ({ tags }) => {
  return (
    <div className={style.tags_container}>
      {tags?.map((tag) => (
        <div style={{ backgroundColor: tag.tagColor }} className={style.tag}>
          {tag.tagName}
        </div>
      ))}

      <button className={style.add_tag}>+Добавить...</button>
    </div>
  );
};
export default Tags;
