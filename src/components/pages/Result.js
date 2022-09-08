import React, { memo } from "react";
import Analysis from "../Analysis";
import Answer from "../Answer";
import Question from "../Question";
import Summary from "../Summary";

const Result = memo(() => {
  return (
    <>
      <Summary />
      <Analysis>
        {/* 1 */}
        <Question>
          <Answer />
        </Question>

        {/* 2 */}
        <Question>
          <Answer />
        </Question>
      </Analysis>
    </>
  );
});

export default Result;
