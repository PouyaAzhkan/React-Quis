import React from "react";

const Options = ({ questions, dispatch, answer, point }) => {
  console.log('the new Point =>', point);
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""}
          ${ hasAnswer ? index === questions.correctOption ? "correct" : "wrong" : "" }`}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export { Options };
