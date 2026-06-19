import style from "./Feedback.module.css";

const Feedback = ({ goodValues, neutralValues, badValues, totalValues, positiveVal }) => {
  return (
    <div className={style.container}>
      <p className={style.text}>Good: {goodValues}</p>
      <p className={style.text}>Neutral: {neutralValues}</p>
      <p className={style.text}>Bad: {badValues}</p>
      <p className={style.text}>Total: {totalValues}</p>
      <p className={style.text}>Positive: {positiveVal}%</p>
    </div>
  );
};

export default Feedback;
