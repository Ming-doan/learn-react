import style from "./Title.module.css";

function Title({ titleMessage }) {
  return (
    <div className={style.container}>
      <div className={style.Title}>{titleMessage}</div>
      <hr />
    </div>
  );
}

export default Title;
