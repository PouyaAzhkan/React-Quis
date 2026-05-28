import React from "react";
import { Options } from "./Options";

const Questions = ({ questions, dispatch, answer, point }) => {
  
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} point={point}/>
    </div>
  );
};

export { Questions };
