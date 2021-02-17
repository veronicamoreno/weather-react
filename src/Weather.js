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
  let [forecast, setForecast] = useState(null);

  function setWeather(response) {
    let dataWeather = response[0].data;
    let dataForecast = response[1].data;
    setDate(new Date(dataWeather.dt * 1000));
    setTemperature(Math.round(dataWeather.main.temp));
    setDescription(dataWeather.weather[0].description);
    setHumidity(dataWeather.main.humidity);
    setWind(Math.round(dataWeather.wind.speed));
    setImage(
      `http://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`
    );
    setForecast(dataForecast);
  }

  function getCurrentWeather(citySearch) {

    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`;
    const requestWeather = axios.get(urlWeather);

    let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=${apiKey}&units=metric`;
    const requestForecast = axios.get(urlForecast);

   axios.all([requestWeather, requestForecast]).then(setWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let citySearch = document.getElementById('type-city').value

    if (citySearch !== "") {
      setCity(citySearch);
      getCurrentWeather(citySearch);
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
      <button className="btn-search"  type="submit">
        <Search  />
      </button>
    </form>
  );

    if(date){
      return (
      <div className="weather">
        <div className="search-engine">
        <button type="button" className="btn" ><MapPin/></button>
        {form}</div>
        <WeatherDetails city={city} date={date} description={description} image={image} temperature={temperature} wind={wind} humidity={humidity} forecast={forecast} />
      </div>
    );
    }
    else{
      return (
      <div className="weather">
        <div className="search-engine">
        <button type="button" className="btn" ><MapPin/></button>
        {form}</div>
      </div>
    );
    }
}
