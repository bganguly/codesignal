import { useState } from 'react';
import './index.scss';

const App = () => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');

  const getHours = (hours, up) => {
    return (
      up ? (hours >= 23 ? 0 :  ++hours) : (hours == 0 ? 23 :  --hours)
    ).toString().padStart(2,'0');
  }
  
  const getMinutes = (minutes, up) => {
    return (
      up ? (minutes >= 59 ? 0 :  ++minutes) : (minutes == 0 ? 59 :  --minutes)
    ).toString().padStart(2,'0');
  }
  
  const handleHoursUpButtonClick = ()  =>{
    const tempHours = hours;
    setHours(getHours(tempHours, true));
  }

  const handleHoursDownButtonClick= ()  => {
    const tempHours = hours;
    setHours(getHours(tempHours, false));
  }

  const handleMinutesUpButtonClick= ()  => {
    const tempMinutes = minutes;
    setMinutes(getMinutes(tempMinutes, true));
  }

  const handleMinutesDownButtonClick= ()  => {
    const tempMinutes = minutes;
    setMinutes(getMinutes(tempMinutes, false));
  }

  return (
    <div id="ClockUpdater" className="container">
      <div className="row">
        <button
          id="hours-up-button"
          onClick={handleHoursUpButtonClick}
          className="btn btn-outline-primary col"
        >
          &uarr;
        </button>

        <button
          id="minutes-up-button"
          className="btn btn-outline-primary col"
          onClick={handleMinutesUpButtonClick}
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
          onClick={handleHoursDownButtonClick}
          className="btn btn-outline-primary col"
        >
          &darr;
        </button>

        <button
          id="minutes-down-button"
          className="btn btn-outline-primary col"
          onClick={handleMinutesDownButtonClick}
        >
          &darr;
        </button>
      </div>
    </div>
  );
};

export default App;
