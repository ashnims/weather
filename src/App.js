import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Location } from "./component/Location";
import logo from "./photo/logo.gif";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("pune");
  const key = "ae48be53b18beddfcd32f9a40247624f";
  const search = () => {
    axios
      .get(
        `http://api.weatherstack.com/current&location?access_key=${key}&query=${city}`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
        // setWeather(response.data.location);
      });
  };

  const submit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <div className="cloud">
      <form onSubmit={submit} className="form">
        <div className="title">
          <h1>Weather Forecast</h1>
          <img src={logo} alt="cloud" className="logo" />
        </div>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input type="submit" value="search location" className="btn-s" />
      </form>
      {weather && (
        <div className="display">
          <div className="front-data">
            <p className="wind-d">It's Day : {weather.current.is_day}</p>
            <p className="wind-c">
              Current-weather :
              <span>
                <img
                  src={weather.current.weather_icons}
                  alt="icon"
                  className="icon"
                />
              </span>
            </p>
            <p className="wind-d">wind dir : {weather.current.wind_dir}</p>
          </div>
          <div className="mide">
            <p className="humidity">
              {weather.current.humidity}
              <WiHumidity className="icons" />
            </p>
            <p className="temp">
              {weather.current.temperature}
              <FaTemperatureLow className="icons" />
            </p>
          </div>
          <h3 className="loc">City: {weather.location.name}</h3>

          <div className="location">
            <Location
              country={weather.location.country}
              region={weather.location.region}
              time={weather.location.localtime}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
//
