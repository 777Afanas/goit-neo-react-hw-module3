import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import style from "./App.module.css";

const App = () => {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-feedback");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const onReset = () => {
    setValues(() => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const noFeedback = totalFeedback === 0;
  const totalPositive = totalFeedback
    ? Math.round((values.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={style.app}>
      <Description />
      <Options
        isEmpty={noFeedback}
        onResetR={onReset}
        onGood={() => updateFeedback("good")}
        onNeutral={() => updateFeedback("neutral")}
        onBad={() => updateFeedback("bad")}
      />
      {!noFeedback && (
        <Feedback
          goodValues={values.good}
          neutralValues={values.neutral}
          badValues={values.bad}
          totalValues={totalFeedback}
          positiveVal={totalPositive}
        />
      )}
      {noFeedback && <Notification />}
    </div>
  );
};

export default App;
