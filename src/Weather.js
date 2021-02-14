import React, {useState} from "react";
import axios from 'axios';
import WeatherDetails from './WeatherDetails';
import './weather.css';
import { Search, MapPin } from 'react-feather';

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

    let citySearch = document.getElementById('type-city').value

    if (citySearch !== "") {
      setCity(citySearch);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=a37867e9632956f71edc348b80f1ca35&units=metric`;
      axios.get(url).then(showTemperature);
    }
  }

  let form = (
    <form onSubmit={handleSubmit}>
  <input
         className="type-city"
         id="type-city"
         type="search"
         placeholder="Enter city"
         autoFocus="on"
       />
      <button className="search"  type="submit">
        <Search  />
      </button>
    </form>
  );

    return (
      <div className="weather">
        <div className="search-engine">
        <button type="button" className="btn" ><MapPin/></button>
        {form}</div>
        <WeatherDetails city={city} date={date} description={description} image={image} temperature={temperature} humidity={humidity} wind={wind} populated={populated}/>
      </div>
    );
}
