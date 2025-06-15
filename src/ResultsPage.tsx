export function ResultsPage({ questions }) {
  const answerNames = ['A', 'B', 'C', 'D']
//   const listQuestions = answers.sort((a1, a2) => a1.localeCompare(a2)).map((answer, index) =>
//     <AnswerButton key={index} text={answer} name={answerNames[index]} />
//   )
    const listQuestions = questions.map((question, index) =>
        <tr class="border border-gray-800 px-4 py-4">
          <td class="px-4 py-2 border border-gray-800">{index+1}</td>
          <td class="px-4 py-2 border border-gray-800"><QuestionResult question={question}/></td>
        </tr>
    );
    function QuestionResult({question}) {
        const orderedAnswers = question.answers.toSorted((a1, a2) => a1.localeCompare(a2))
        const answerIndex = orderedAnswers.findIndex((answer) => answer == question.answers[0])
        return(<>{answerNames[answerIndex]}</>)
    };
  return (
    <>
    <div class="bg-gradient-to-t from-[#0e7490] via-[#3b82f6] to-[#4f46e5] duration-500 my-4 shadow-blue-500/50 p-4 max-w items-center gap-y-4 rounded-xl shadow-lg bg-orange-800 outline-4 -outline-offset-1 outline-blue-500">
      Respostas
    </div>
      <table class="table-auto border border-gray-900 bg-gray-200 text-black text-xl">
        <tbody>
          {listQuestions}
        </tbody>
      </table>
    </>
);
}