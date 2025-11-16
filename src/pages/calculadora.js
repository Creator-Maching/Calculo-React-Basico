import React from "react";
import '../App.css';
import { useState } from "react";


export default function Calculadora() {
  const [input, setInput] = useState("");

  const addToInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calcular = () => {
    try {
      setInput(String(eval(input))); 
    } catch {
      setInput("Erro");
    }
  };

  const limpar = () => setInput("");

  return (
    <div>
      <input 
        type="text"
        value={input}
        readOnly/>

      <div className="calculo">
      <div>
        <button onClick={() => addToInput("7")}>7</button>
        <button onClick={() => addToInput("8")}>8</button>
        <button onClick={() => addToInput("9")}>9</button>
        <button onClick={limpar}>C</button>
      </div>
      <div>
        <button onClick={() => addToInput("4")}>4</button>
        <button onClick={() => addToInput("5")}>5</button>
        <button onClick={() => addToInput("6")}>6</button>
        <button onClick={() => addToInput("*")}>*</button>
      </div>
      <div>
        <button onClick={() => addToInput("1")}>1</button>
        <button onClick={() => addToInput("2")}>2</button>
        <button onClick={() => addToInput("3")}>3</button>
        <button onClick={() => addToInput("-")}>-</button>
      </div>
        <button onClick={() => addToInput("0")}>0</button>
        <button onClick={() => addToInput(".")}>.</button>
        <button onClick={calcular}>=</button>
        <button onClick={() => addToInput("+")}>+</button>
      </div>
    </div>
  );
}