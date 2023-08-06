import style from "./Title.module.css";
import { BsFillMoonFill } from "react-icons/bs";

function Title({ titleMessage }) {
  return (
    <div className={style.container}>
      <div className={style.title}>{titleMessage}</div>
      <div className={style.themeButton}>
        <BsFillMoonFill />
      </div>
    </div>
  );
}

export default Title;
