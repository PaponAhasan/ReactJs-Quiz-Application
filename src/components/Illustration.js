import React from "react";
import classes from "../styles/Illustration.module.css";

const Illustration = ({ image, ...rest }) => {
  return (
    <div className={classes.illustration}>
      <img src={image} {...rest} />
    </div>
  );
};

export default Illustration;
