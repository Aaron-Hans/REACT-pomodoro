import React from "react";
import style from "./Button.module.css";

export default function Button({ isTimerStarted, onClick }) {
  return (
    <div>
      <button
        className={`${style["clock-btn"]} ${
          style[`clock-btn-${isTimerStarted ? "stop" : "start"}`]
        }`}
        onClick={onClick}
      >
        {isTimerStarted ? "Stop" : "Start"}
      </button>
    </div>
  );
}
