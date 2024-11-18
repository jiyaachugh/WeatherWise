import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm.js';  
import WeatherDisplay from './components/WeatherDisplay.js';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <WeatherForm setWeatherData={setWeatherData} setError={setError} />
      {error && <p className="error">{error}</p>}  {/* Display error message if any */}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}  {/* Display weather data */}
    </div>
  );
}

export default App;
