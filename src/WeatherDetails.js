import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import './weatherDetails.css';

export default function WeatherDetails(props) {

return(
        <div className="weatherDetails">
            <h2> {props.city} </h2>
          
          <span className="date"><FormattedDate date={props.date} /></span>

          <div className="row">

            <div className="col-sm-8 col-md-8 col-lg-6">
                <div>
                <img alt={props.description} src={props.image} />{" "}
                <span className="description" >{props.description}</span><br/>
                </div>

                <div className="display-weather">
                    <WeatherTemperature celsius={props.temperature} wind={props.wind} humidity={props.humidity}/>
                </div>
            </div>
            <div className="showForecast col-sm-8 col-md-8 col-lg-4">
                <WeatherForecast city={props.city} forecast={props.forecast} />
            </div>

          </div>

        </div>
    );

}