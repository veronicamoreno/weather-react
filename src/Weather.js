import React, {useState} from "react";
import axios from 'axios';
import WeatherDetails from './WeatherDetails';
import './weather.css';

export default function Weather(props) {

  let [city, setCity] = useState("");
  let [date, setDate]=useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [image, setImage] = useState(null);
  let [populated, setPopulated] = useState(false);

  function showTemperature(response) {
    setDate(new Date(response.data.dt * 1000));
    setTemperature(Math.round(response.data.main.temp));
    setDescription( response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setImage(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

    setPopulated(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (city !== "") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a37867e9632956f71edc348b80f1ca35&units=metric`;
      axios.get(url).then(showTemperature);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="type-city"
        type="search"
        placeholder="Enter city"
        autoFocus="on"
        onChange={updateCity}
      />
      <input className="search" type="submit" value="Search" />
    </form>
  );

  // if (populated) {
    return (
      <div className="weather">
        <div className="search-engine">
        <button type="button" className="btn">Current</button>
        {form}</div>
        
        <WeatherDetails city={city} date={date} description={description} image={image} temperature={temperature} humidity={humidity} wind={wind} populated={populated}/>
        {/* <div className="Weather">
          <h2>{city}</h2>
          <span className="date"><FormattedDate date={date} /></span>

          <div className="row">
            <div className="col-6">

            <div>
              <img alt={description} src={image} />{" "}
              <span className="description" >{description}</span><br/>
            </div>

              <div className="display-weather">
                <p><span className="temperature"> {temperature}</span><span className="units"> °C | F</span>{" "}|{" "}
              Humidity: {humidity}%{" "}|{" "}
              Wind {wind}km/h</p>
             </div>

            </div>
          </div>

        </div> */}
      </div>
    );
  // } else {
  //   return  (
  // <div className="btn-toolbar">
 //   <button type="button" className="btn">Current</button>
  //           <div className="input-group">
  //             {form}
  //           </div>
  //       </div>
  //       );
  // }
}
