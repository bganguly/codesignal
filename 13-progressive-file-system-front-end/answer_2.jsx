import { useState } from 'react';
import './index.scss';

const App = () => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const hoursUpHandler = () => {
    let tempHours = parseInt(hours);
    if (tempHours < 23) {
      ++tempHours;
      setHours(tempHours.toString().padStart(2,'0'))
    } else {
      setHours('00')
    }
  }
  const hoursDownHandler = () => {
    let tempHours = parseInt(hours);
    if (tempHours > 0) {
      --tempHours;
      setHours(tempHours.toString().padStart(2,'0'))
    } else {
      setHours('23')
    }
  }
  const minutesUpHandler = () => {
    let tempMinutes = parseInt(minutes);
    if (tempMinutes < 59) {
      ++tempMinutes;
      setMinutes(tempMinutes.toString().padStart(2,'0'))
    } else {
      setMinutes('00')
    }
  }
  const minutesDownHandler = () => {
    let tempMinutes = parseInt(minutes);
    if (tempMinutes > 0) {
      --tempMinutes;
      setMinutes(tempMinutes.toString().padStart(2,'0'))
    } else {
      setMinutes('59')
    }
  }

  return (
    <div id="ClockUpdater" className="container">
      <div className="row">
        <button
          id="hours-up-button"
          className="btn btn-outline-primary col"
          onClick = {hoursUpHandler}
        >
          &uarr;
        </button>

        <button
          id="minutes-up-button"
          className="btn btn-outline-primary col"
          onClick = {minutesUpHandler}
        >
          &uarr;
        </button>
      </div>

      <div className="row">
        <div id="clock" className="badge badge-primary col">
          {`${hours}:${minutes}`}
        </div>
      </div>

      <div className="row">
        <button
          id="hours-down-button"
          className="btn btn-outline-primary col"
          onClick = {hoursDownHandler}
        >
          &darr;
        </button>

      { /* Level 1: Add your code here */ }
        <button
          id="minutes-down-button"
          className="btn btn-outline-primary col"
          onClick = {minutesDownHandler}
        >
          &darr;
        </button>
      </div>
    </div>
  );
};

export default App;