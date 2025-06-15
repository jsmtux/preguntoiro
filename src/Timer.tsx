import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import React, { useState } from "react";

import "./timer.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Seguinte</div>;
  }

    if (remainingTime < 60)
    {
        return (
            <div className="timer">
            <div className="text">Quedan</div>
            <div className="value">{remainingTime}</div>
            <div className="text">segundos</div>
            </div>
        );
    }
    else
    {
        return (
            <div className="timer">
            <div className="text">Quedan</div>
            <div className="value">{Math.ceil(remainingTime/60)}</div>
            <div className="text">minutos</div>
            </div>
        );
    }
};

export function Timer({ minutes }) {
//   const listItems = answers.toSorted((a1, a2) => a1.localeCompare(a2)).map((answer, index) =>
//     <AnswerButton key={index} text={answer} name={answerNames[index]} delay={(index+2)*500} />
//   )
//   return (
//       <div class="grid grid-cols-2 gap-4 p-8">
//         {listItems}
//       </div>
// );
    const[timerOpacity, setTimerOpacity] = useState(0.0)
    let style = {
        opacity: timerOpacity
    }
    setTimeout(() => setTimerOpacity(1.0), 3000);

    return (
      <>
        <div style={style} class="grid grid-cols-1 justify-items-center transition-opacity opacity-0 duration-500">
          <CountdownCircleTimer
            isPlaying={timerOpacity == 1.0}
            duration={minutes * 60}
            initialRemainingTime={minutes * 60}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[60, 30, 10, 0]}
          >
            {renderTime}
          </CountdownCircleTimer>
    </div>
  </>
    )
}