import { AnswerButton } from "./AnswerButton"
import { useEffect, useState } from 'react';

export function AnswerList({ answers }) {
  const answerNames = ['A', 'B', 'C', 'D']
  const listItems = answers.toSorted((a1, a2) => a1.localeCompare(a2)).map((answer, index) =>
    <AnswerButton key={index} text={answer} name={answerNames[index]} delay={(index+2)*500} />
  )

  return (
      <div class="grid grid-cols-2 gap-8 p-8">
        {listItems}
      </div>
);
}
