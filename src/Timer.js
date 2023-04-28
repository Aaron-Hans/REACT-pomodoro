import { useCallback, useMemo, useState } from "react";
import style from "./Timer.module.css";
import ClockDisplay from "./ClockDisplay";
import TimerText from "./TimerText";
import Button from "./Button";

let timerId;

function Timer(props) {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [time, setTime] = useState(0);

  const handleStartTimer = () => {
    if (isTimerStarted) {
      clearInterval(timerId);

      props.saveTime(time);

      setIsTimerStarted(false);
      setTime(0);
    } else {
      setIsTimerStarted(true);
      timerId = setInterval(() => {
        setTime((prevTime) => {
          return prevTime + 1;
        });
      }, 1000);
    }
  };

  // const displayParagraph = useMemo(() => {
  //   return (
  //     <p>
  //       {console.log("RENDER>>>>>P")}
  //       {isTimerStarted ? "Le timer est démarré" : "Le timer est arrêtè"}
  //     </p>
  //   );
  // }, [isTimerStarted]);

  const handleClick = useCallback(() => {
    alert("Hello world!");
  }, []);

  return (
    <>
      <ClockDisplay time={time} className={style["clock-timer"]} />
      <Button isTimerStarted={isTimerStarted} onClick={handleStartTimer} />
      <Button isTimerStarted={isTimerStarted} onClick={handleClick} />
      <TimerText isTimerStart={isTimerStarted} />
    </>
  );
}

export default Timer;
