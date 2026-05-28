import React from "react";
import { StartScreen } from "./StartScreen";
import { Error } from "./Error";
import { Loader } from "./Loader";
import { Questions } from "./Questions";
import NextButton from "./NextButton";
import { Progress } from "./Progeress";

const Main = ({ status, questions, index, dispatch, answer, point }) => {
  console.log(status);
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StartScreen questions={questions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <>
          <Progress
            point={point}
            index={index}
            questions={questions}
            questionsNumber={questions.length}
            answer={answer}
          />
          <Questions
            questions={questions[index]}
            dispatch={dispatch}
            answer={answer}
            point={point}
          />
          <NextButton dispatch={dispatch} answer={answer} />
        </>
      )}
    </main>
  );
};

export { Main };
