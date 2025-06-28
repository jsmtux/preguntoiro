import { useState } from "react";
import "./answerButton.css"

export function AnswerButton({ text, name, delay }) {
    const[btnOpacity, setBtnOpacity] = useState(0.0)
    let style = {
        opacity: btnOpacity
    }
    setTimeout(() => setBtnOpacity(1.0), delay);
  return (
    <div style={style} class="backdrop-hue-rotate-180 backdrop-saturate-200 backdrop-blur-xs backdrop-brightness-200 transition-opacity duration-500 bg-gradient-to-t from-[#f59f0b4e] via-[#fcd34d46] to-[#fef9c35d] shadow-lg shadow-yellow-500/50 p-8 max-w items-center gap-y-4 rounded-xl shadow-lg outline-4 -outline-offset-1 outline-yellow-500">
        <div>
            <div class="p-8 text-4xl font-medium text-blue-200">{name}. {text}</div>
        </div>
    </div>
);
}