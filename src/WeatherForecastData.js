import React from "react";
import { Clock, Thermometer } from 'react-feather';
import "./WeatherForecastData.css";



export default function WeatherForecastData(props) {

    function hours() {
        let date = new Date(props.data.dt*1000);
        let hours = date.getHours();
          if (hours < 10) {
            hours = `0${hours}`;
             }
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);

        return`${temperature}°C`;
    }

    return(
        <div className="WeatherForecastData">                
            < Clock/> {hours()}   | 
            <img alt={props.data.weather.description} src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/>{" "}|  
            < Thermometer/> {temperature()}
        </div>

    );
    
}