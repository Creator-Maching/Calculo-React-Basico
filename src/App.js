import React from "react";
import './App.css';
import { useState } from "react";
import Timer from "./pages/timer";
import Calculadora from "./pages/calculadora";

export default function Page() {

  const [page, setPage] = useState("timer");

  return (
    <div className="container">
      <nav className="nav-bar">
        <button onClick={() => setPage("timer")}>Cronômetro</button>
        <button onClick={() => setPage("calculadora")}>Calculadora</button>
      </nav>

      {page === "timer" && <Timer />}
      {page === "calculadora" && <Calculadora />}

    </div>
  );
}
