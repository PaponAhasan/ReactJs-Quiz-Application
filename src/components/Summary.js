import React from "react";
import image from "../assets/images/success.png";
import classes from "../styles/Summary.module.css";

const Summary = () => {
  return (
    <div class={classes.summary}>
      <div class={classes.point}>
        {/* progress bar will be placed here */}
        <p class={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div class={classes.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
