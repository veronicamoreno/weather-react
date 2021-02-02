import reactDom, {useState} from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [image, setImage] = useState(null);
  let [populated, setPopulated] = useState(false);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
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
        placeholder="Type a city"
        onChange={updateCity}
      />
      <input className="search" type="submit" value="Search" />
    </form>
  );

  if (populated) {
    return (
      <div>
        {form}
        <div className="Weather">
          <p>Forecast in {city}:</p>
          <ul>
            <li>Temperature: {temperature}°C</li>
            <li>Description: {description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind}km/h</li>
            <li>
              <img alt="" src={image} />{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
