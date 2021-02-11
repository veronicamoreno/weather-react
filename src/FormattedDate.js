import React from 'react';

export default function FormattedDate(props) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    let hours= props.date.getHours();
    if (hours < 10) {
    hours = `0${hours}`;
  }
    let minutes=props.date.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds=props.date.getSeconds();
    if (seconds < 10) {
    seconds = `0${seconds}`;
  }
    return(
        <div className="FormattedDate">
            <p>{day}, {date} {month} {year}</p>
            <p>{hours}:{minutes}:{seconds}</p>
         </div>
    );
}