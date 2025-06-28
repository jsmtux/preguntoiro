import { useState } from "react";

export function QuestionTitle({title, index}) {
    const[btnOpacity, setBtnOpacity] = useState(0.0)
    let style = {
        opacity: btnOpacity
    }
    setTimeout(() => setBtnOpacity(1.0), 10);
  return (
    <div class="place-items-center">
        <div style={style} class="backdrop-saturate-200 backdrop-blur-xs backdrop-brightness-150 bg-gradient-to-t from-[#0e74903d] via-[#3b82f63d] to-[#4e46e53d] duration-500 shadow-blue-500/50 p-4 items-center gap-y-4 rounded-xl shadow-lg outline-4 -outline-offset-1 outline-blue-500">
            <p class="text-gray-500 dark:text-gray-400 text-2xl">Pregunta {index}</p>
            <div class="p-4 text-5xl font-medium text-black dark:text-white">{title}</div>
        </div>
    </div>
);
}