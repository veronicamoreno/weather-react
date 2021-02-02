import logo from './logo.png'
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1>Weather App </h1>
        <Weather/>
        <span><a href="https://github.com/veronicamoreno/weather-react" target="_blank">Open-sourced code </a> by Veronica Moreno</span>

      </header>
    </div>
  );
}

export default App;
