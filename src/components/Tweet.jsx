import style from "./Tweet.module.css";
import { BsFillTrashFill } from "react-icons/bs";

export default function Tweet({ date, tweet }) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.date}>{date}</div>
        <div className={style.tweet}>{tweet}</div>
      </div>
      <div className={style.actions}>
        <button className={style.deleteButton}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
}
