import React from "react";
import { OpenWeatherAPIKey } from "./api_keys"; // Hide the API key from github

export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = { weatherData: "" };

    this.processLocation = this.processLocation.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.processLocation);
  }

  processLocation(pos) {
    let { latitude, longitude } = pos.coords;

    let request = new XMLHttpRequest();

    // Mode JSON for ease of processing
    request.open(
      "GET", 
      `http://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(latitude)}&lon=${Math.floor(longitude)}&appid=${OpenWeatherAPIKey}&mode=json`,
      true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400)  // Checks for success codes
        this.updateLocation(JSON.parse(request.response))           // request.response holds the response info
      else {
        console.log(`Error ${request.status}, ${request.readyState}`);
      }
    };

    request.onerror = () => {
      console.log("Something went wrong, never reached server!");
    };

    request.send();
  }

  updateLocation(weatherData) {
    this.setState({ weatherData: weatherData })
  }

  renderWeatherData() {
    let {weather, main} = this.state.weatherData;
    if (this.state.weatherData)
      return (
        <div className="weather-data">
          <div>Temperature: {Math.round(main.temp - 273)}C</div>
          <div>Feels Like: {Math.round(main.feels_like - 273)}C</div>
          <div>Type: {weather[0].main}</div>
          <div>Description: {weather[0].description}</div>
        </div>
      );
    else
      return <div>Loading...</div>
  }

  render() {
    return (
      <div className="widget">
        { this.renderWeatherData() }
      </div>
    )
  }
}