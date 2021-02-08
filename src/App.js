import logo from './logo.png'
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="Logo" />
          <h1>Weather App </h1>
          <Weather/>
        </header>
        <footer>
          <a href="https://github.com/veronicamoreno/weather-react" rel="noopener noreferrer" target="_blank">Open-sourced code </a> by <a href="https://veronicamoreno.me/" rel="noopener noreferrer" target="_blank"> Veronica Moreno</a>
          </footer>
      </div>
    </div>
  );
}

export default App;
