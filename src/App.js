import { useState } from "react";
import Timer from "./Timer";
import TimersTable from "./TimersTable";
import style from "./App.module.css";

function secondsToHms(timeIneSeconds) {
  timeIneSeconds = Number(timeIneSeconds);
  const h = Math.floor(timeIneSeconds / 3600);
  const m = Math.floor((timeIneSeconds % 3600) / 60);
  const s = Math.floor((timeIneSeconds % 3600) % 60);

  const hDisplay = h < 10 ? "0" + h : h;
  const mDisplay = m < 10 ? "0" + m : m;
  const sDisplay = s < 10 ? "0" + s : s;

  return `${hDisplay}:${mDisplay}:${sDisplay}`;
}

function App() {

  const [timers, setTimers] = useState([]);


  const saveTime = (time) => {
    const date = new Date();
    setTimers([...timers, { time, date }]);
  };

  const displayTimerDetails = (timer) => {
    alert(`
    ${timer.date.toLocaleDateString()} at ${timer.date.toLocaleTimeString()} \n
    ${secondsToHms(timer.time)}
    `);
  };
  return (
    <div className={style.container}>
      <h1 className={style["main-title"]}>Pomodoro Timer</h1>
      <Timer saveTime={saveTime} />
      <TimersTable
        timers={timers}
        onDisplayTimerDetails={displayTimerDetails}
      />
    </div>
  );
}
export default App;
