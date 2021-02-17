import React from "react";
// import { Clock, Thermometer } from 'react-feather';
import WeatherForecastData from "./WeatherForecastData";
import "./WeatherForecast.css";

export default function WeatherForecast(props){


if(props.forecast){
return (
            <div className="WeatherForecast">
                <WeatherForecastData data={props.forecast.list[0]} />
                <WeatherForecastData data={props.forecast.list[1]} />
                <WeatherForecastData data={props.forecast.list[2]} />
                <WeatherForecastData data={props.forecast.list[3]} />
                <WeatherForecastData data={props.forecast.list[4]} />
                <WeatherForecastData data={props.forecast.list[5]} />
            </div>
            );
}
else{
    return null;
}

}

