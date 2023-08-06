import style from "./Input.module.css";

export default function Input() {
  return (
    <div className={style.container}>
      <input type="text" placeholder="Enter tweet" className={style.input} />
      <button className={style.button}>Tweet</button>
    </div>
  );
}
