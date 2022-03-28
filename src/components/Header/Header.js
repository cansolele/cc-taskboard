import style from "./Header.module.css";
import { useSelector } from "react-redux";
const Header = () => {
  const header = useSelector((state) => state.board.board.header);
  console.log(header);
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
        CC TaskBoard :: Следующая задача -{" "}
        <a href="/#" className={style.link_to_task}>
          {header?.title}
        </a>
      </div>
    </header>
  );
};

export default Header;
