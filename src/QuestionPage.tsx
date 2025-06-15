import { AnswerList } from "./AnswerList"
import { QuestionTitle } from "./QuestionTitle"
import { Timer } from "./Timer"

export function QuestionPage({ question, index }) {
    return(<>
      <QuestionTitle title={question.title} index={index}/>
      <AnswerList answers={question.answers}/>
      <Timer minutes='1' />
    </>)
}