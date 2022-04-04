import style from "./Header.module.css";
const Header = ({ header }) => {
  return (
    <header
      className={style.header}
      style={{
        backgroundColor: header?.header_background_color,
        color: header?.header_text_color,
      }}
    >
      <div className={style.header_icon_container}>
        <div className={style.header_icon}>ICON</div>
      </div>
      <div className={style.next_task}>
        {header?.title} :: Следующая задача -{" "}
        <a href="/#" className={style.link_to_task}>
          ????
        </a>
      </div>
    </header>
  );
};

export default Header;
