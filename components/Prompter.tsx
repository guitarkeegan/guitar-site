"use client";
import { useState, useEffect } from "react";

export default function Prompter() {
  const questions = [
    "Welcome to the Secret Page. Please type in password",
    "",
    "",
  ];

  const [prompt, setPrompt] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  let letter = 1;

  const gamemaker = (s: string) => {
    let val = setInterval(() => {
      setPrompt(s.slice(0, letter));
      letter++;
      if (letter === s.length + 1) {
        clearInterval(val);
      }
    }, 100);
  };

  useEffect(() => {
    
    gamemaker(questions[currentQuestion]);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 id="prompt" className="w-[200px] h-[150px] wrap">{prompt}</h1>
      <form>
        <input id="secret-input" className="bg-gray-700 h-[40px] blinking-cursor" autoFocus type="text" />
        <button className="bg-blue-400 px-2 h-[40px]">continue</button>
      </form>
    </div>
  );
}
