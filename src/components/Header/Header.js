import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_icon_container}>
        <div className={style.header_icon}>ICON</div>
      </div>
      <div className={style.next_task}>
        CC TaskBoard :: Следующая задача -{" "}
        <a href="/#" className={style.link_to_task}>
          Задача 1 (Чат-бот Джефф)
        </a>
      </div>
    </header>
  );
};

export default Header;
