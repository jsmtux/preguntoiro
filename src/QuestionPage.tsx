import { AnswerList } from "./AnswerList"
import { QuestionTitle } from "./QuestionTitle"

export function QuestionPage({ question, index }) {
    return(<>
      <QuestionTitle title={question.title} index={index}/>
      <AnswerList answers={question.answers}/>
    </>)
}