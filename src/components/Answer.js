import React from "react";
import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

const Answer = () => {
  return (
    <div className={classes.answer}>
      {/* Option */}
      <Checkbox
        className={classes.answer}
        text={"Test Answer"}
        type="checkbox"
      />
      <Checkbox
        className={` ${classes.answer} ${classes.wrong}`}
        text={"Test Answer"}
        type="checkbox"
      />
      <Checkbox
        className={` ${classes.answer} ${classes.correct}`}
        text={"Test Answer"}
        type="checkbox"
      />

      {/* <label class="answer" for="option1">
        <input type="checkbox" id="option1" />A New Hope 1
      </label> */}
    </div>
  );
};

export default Answer;
