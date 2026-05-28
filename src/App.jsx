import { useEffect, useReducer } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const initialStates = {
  questions: [],
  // status => 'ready', 'loading', 'error', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  point: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DataReceive":
      return { ...state, questions: action.payload, status: "ready" };
    case "DataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return { ...state,
        answer: action.payload,
        point: action.payload === question.correctOption ? state.point + question.points : state.point 
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null }
    default:
      throw new Error("UnKonwn Action");
  }
};

const App = () => {
  const [{ questions, status, index, answer, point }, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const Response = await fetch(`../data/questions.json`);
        const Data = await Response.json();
        dispatch({ type: "DataReceive", payload: Data.questions });
      } catch (error) {
        dispatch({ type: "DataFailed" });
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main
        status={status}
        questions={questions}
        dispatch={dispatch}
        index={index}
        answer={answer}
        point={point}
      />
    </div>
  );
};

export { App };
