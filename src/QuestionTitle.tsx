import { useState } from "react";

export function QuestionTitle({title, index}) {
    const[btnOpacity, setBtnOpacity] = useState(0.0)
    let style = {
        opacity: btnOpacity
    }
    setTimeout(() => setBtnOpacity(1.0), 10);
  return (
    <div class="place-items-center">
        <div style={style} class="bg-gradient-to-t from-[#0e7490] via-[#3b82f6] to-[#4f46e5] duration-500 shadow-blue-500/50 p-4 items-center gap-y-4 rounded-xl shadow-lg bg-orange-800 outline-4 -outline-offset-1 outline-blue-500">
            <div>
                <p class="text-gray-500 dark:text-gray-400">Pregunta {index}</p>
                <div class="p-4 text-5xl font-medium text-black dark:text-white">{title}</div>
            </div>
        </div>
    </div>
);
}