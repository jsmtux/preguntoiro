import axios from "axios";

import { useEffect, useState } from 'react';

import { QuestionPage } from "./QuestionPage";
import { ResultsPage } from "./ResultsPage";
import "./index.css";

export function App({}) {
  function handleClick() {
    setQuestionIndex(c => (c + 1));
  }

  useEffect(() => {
    document.body.addEventListener('click', () => {
      handleClick();
    });

    document.body.addEventListener('keydown', (event) => {
      if (event.key == "ArrowLeft") {
        setQuestionIndex(c => (c - 1));
      }else if (event.key == "ArrowRight") {
        setQuestionIndex(c => (c + 1));
      }
    });
    
    axios.get("/preguntas.json").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  const[questionIndex, setQuestionIndex] = useState(0)
  const answerList = questionIndex - 15
  const[questions, setQuestions] = useState([])

  function MainContent({isFinishState}) {
    if (questions.length == 0) {
      return(<><h1>Cargando...</h1></>)
    } else if (!isFinishState) {
      return(
      <>
        <h1 class="text-5xl font-bold my-12 leading-tight">Preguntoiro da Rilleira</h1>
        <QuestionPage question={questions[questionIndex]} index={questionIndex + 1}/>
      </>)
    } else {
      return(<ResultsPage questions={questions} questionIndex={answerList}/>)
    }
  }

  return (
    <div class="mx-auto p-4 text-center relative z-10">
      <MainContent isFinishState={questionIndex >= questions.length} />
    </div>
  );
}

export default App;
