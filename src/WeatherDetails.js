import React from "react";
import FormattedDate from "./FormattedDate";
import { Thermometer, Droplet, Wind } from 'react-feather';
import './weatherDetails.css';

export default function WeatherDetails(props) {

    if (props.populated) {
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
                    <p><Thermometer/><span className="temperature"> {props.temperature}</span><span className="units"> °C | F</span>{" "}|{" "}
                <Droplet/> {props.humidity}%{" "}|{" "}
                <Wind /> {props.wind}km/h</p>
                </div>
            </div>

          </div>

        </div>
    );
    } else {
        return  (
            
        <div className="btn-toolbar">
          {/* <button type="button" className="btn">Current</button>  */}
            <div className="input-group">
            </div>
      </div>
        );
    }
}