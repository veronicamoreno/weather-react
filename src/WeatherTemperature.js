import React, {useState} from "react";
import { Thermometer, Droplet, Wind } from 'react-feather';
import './WeatherTemperature.css';


export default function WeatherTemperature(props) {

    let [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    }

     function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

    if (unit === "celsius") {
    return(
        <div className="WeatherTemperature">
            <p><Thermometer size={20}/><span className="temperature">{props.celsius}</span>
             <span className="units">°C  <a href="/" onClick={showFahrenheit}>°F</a></span> {" "}|{" "}<Droplet size={20}/> {props.humidity}%{" "}|{" "}<Wind size={20}/> {props.wind}km/h</p>
        </div>
    );
} else{
    return (
      <div className="WeatherTemperature">
       <p> <Thermometer size={20}/><span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}°F</span>{" "}|{" "}<Droplet size={20}/> {props.humidity}%{" "}|{" "}<Wind size={20}/> {props.wind}km/h
        </p>
      </div>
    );
    }
}