import React from "react";
import classes from "../styles/Analysis.module.css";

const Analysis = ({ children }) => {
  return (
    <div class={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      {children}
    </div>
  );
};

export default Analysis;
