import {App} from "./App"

export function ResultsPage({ questions, questionIndex }) {

  const answerNames = ['A', 'B', 'C', 'D']
  const listQuestions = questions.map((question, index) =>
      <tr class="border border-gray-800 px-4 py-4" key={index}>
        <td class="px-4 py-2 border border-gray-800">{index+1}</td>
        <td class="px-4 py-2 border border-gray-800"><QuestionResult question={question} shown={questionIndex > index} /></td>
      </tr>
  );
  
  function QuestionResult({question, shown}) {
      const orderedAnswers = question.answers.toSorted((a1, a2) => a1.localeCompare(a2))
      const answerIndex = orderedAnswers.findIndex((answer) => answer == question.answers[0])
      if(shown) {
        return(<>{answerNames[answerIndex]}</>)
      }
      else {
        return (<></>)
      }
  };

  function QuestionExplanation({questionIndex}) {
    if(questionIndex > 0) {
      const numQuestion = Math.min(questionIndex-1, 14)
      return(
        <>
        <div class="text-3xl my-10">
          {numQuestion+1}. {questions[numQuestion].title}
        </div>
        <div class="text-3xl">
          {questions[numQuestion].answers[0]}
        </div>
        </>)
    } else {
      return <></>
    }
  };

  return (
    <div class="flex">
      <div class="w-14 flex-auto mx-32">
        <span class="bg-gradient-to-t from-[#0e7490] via-[#3b82f6] to-[#4f46e5] duration-500 my-8 shadow-blue-500/50 p-4 max-w items-center gap-y-4 rounded-xl shadow-lg outline-4 -outline-offset-1 outline-blue-500">
          Respostas
        </span>
        <div class="my-6">
          <table class="table-auto border border-gray-900 bg-gray-200 text-black text-xl">
            <tbody>
              {listQuestions}
            </tbody>
          </table>
        </div>
      </div>
      <div class="w-86 flex-auto">
        <QuestionExplanation questionIndex={questionIndex}></QuestionExplanation>
      </div>
    </div>
);
}