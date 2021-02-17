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
   setCity(dataWeather.name);
  }

  function getCurrentWeather(citySearch, geoLocation) {

    let apiKey = "a37867e9632956f71edc348b80f1ca35";
    let urlWeather;
    let urlForecast;

    if(geoLocation){
      urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${citySearch.latitude}&lon=${citySearch.longitude}&appid=${apiKey}&units=metric`;
    }
    else{
      urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`;
    }

    const requestWeather = axios.get(urlWeather);

    if(geoLocation)
    {
    urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${citySearch.latitude}&lon=${citySearch.longitude}&appid=${apiKey}&units=metric`;
    }
    else{
    urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=${apiKey}&units=metric`;      
    }
    const requestForecast = axios.get(urlForecast);

   axios.all([requestWeather, requestForecast]).then(setWeather);
  }

function getPosition(position) {
  getCurrentWeather(position.coords, true);
}

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let citySearch = document.getElementById('type-city').value

    if (citySearch !== "") {
      setCity(citySearch);
      getCurrentWeather(citySearch, false);
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
        <button type="button" className="btn" onClick={getCurrentLocation} ><MapPin/></button>
        {form}</div>
        <WeatherDetails city={city} date={date} description={description} image={image} temperature={temperature} wind={wind} humidity={humidity} forecast={forecast} />
      </div>
    );
    }
    else{
      return (
      <div className="weather">
        <div className="search-engine">
        <button type="button" className="btn" onClick={getCurrentLocation} ><MapPin/></button>
        {form}</div>
      </div>
    );
    }
}
