import React from "react";
import '../App.css';
import { useState, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function reset() {
    stop();
    setTime(0);
  }
  return (
      <div className="timer">

  <h1>{time}s</h1>
      <button onClick={start}>Iniciar</button>
      <button onClick={stop}>Parar</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
}