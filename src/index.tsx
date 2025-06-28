import { serve } from "bun";
import index from "./index.html";

let question_data = [];

const foo = Bun.file(Bun.argv[2]);
const text = await foo.text();
const lines = text.split(/\r?\n/);
lines.slice(0, 15).forEach( (line) => {
  var question = {
    "title": line.split(",")[1],
    "answers": []
  }
  for (let i = 2; i < 6; i++) {
    question["answers"].push(line.split(",")[i] ?? "")
  }
  question_data.push(question)
})

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/preguntas.json": Response.json(question_data),
    "/*": index,

  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});
