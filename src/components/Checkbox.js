import React from "react";

const Checkbox = ({ text, ...rest }) => {
  return (
    <>
      <label>
        <input {...rest} />
        <span> {text} </span>
      </label>
    </>
  );
};

export default Checkbox;
