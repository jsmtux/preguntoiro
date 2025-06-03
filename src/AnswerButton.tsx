import { useState } from "react";
import "./answerButton.css"

export function AnswerButton({ text, name, delay }) {
    const[btnOpacity, setBtnOpacity] = useState(0.0)
    let style = {
        opacity: btnOpacity
    }
    setTimeout(() => setBtnOpacity(1.0), delay);
  return (
    <div style={style} class="transition-opacity duration-500 bg-gradient-to-t from-[#f59e0b] via-[#fcd34d] to-[#fef9c3] shadow-lg shadow-yellow-500/50 p-8 max-w items-center gap-y-4 rounded-xl shadow-lg outline-4 -outline-offset-1 outline-yellow-500">
        <div>
            <div class="p-8 text-4xl font-medium text-blue-900">{name}. {text}</div>
        </div>
    </div>
);
}