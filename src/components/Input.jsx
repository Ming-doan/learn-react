import style from "./Input.module.css";

export default function Input() {
  return (
    <div className={style.container}>
      <input type="text" placeholder="Enter tweet" className={style.Input} />
      <button className={style.Button}>Tweet</button>
    </div>
  );
}
