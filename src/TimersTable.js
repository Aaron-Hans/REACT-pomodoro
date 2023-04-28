import style from "./TimerTable.module.css";
import ClockDisplay from "./ClockDisplay";


function TimersTable(props) {
  return (
    <table className={style["timer-table"]}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.timers.map((timer) => (
          <tr
            onClick={() => props.onDisplayTimerDetails(timer)}
            key={timer.date.getMilliseconds()}
          >
            <td>
              {timer.date.toLocaleDateString()} at{" "}
              {timer.date.toLocaleTimeString()}{" "}
            </td>
            <td><ClockDisplay time={timer.time}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TimersTable;
