import React from "react";
import classes from "../styles/Question.module.css";

const Question = ({ children }) => {
  return (
    <div class={classes.question}>
      <div class={classes.qtitle}>
        <span class="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <div class={classes.question}>{children}</div>
    </div>
  );
};

export default Question;
