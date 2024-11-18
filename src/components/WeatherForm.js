import React, { useState } from 'react';
import axios from 'axios';

function WeatherForm({ setWeatherData, setError }) {
  const [city, setCity] = useState('');  // State to hold user input for city
  const [isLoading, setIsLoading] = useState(false);  // State to track loading status

  const fetchWeather = async (e) => {
    e.preventDefault();  // Prevent the default form submission
    setError(null);  // Clear previous error
    setWeatherData(null);  // Clear previous weather data
    setIsLoading(true);  // Start loading

    try {
      const apiKey = 'e3d46cc5874f731222c442a1d34008a9';  // Your OpenWeatherMap API key
      // Fetch weather data using the city input
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);  // Set the weather data
    } catch (error) {
      setError('City not found. Please try again.');  // Handle error if the city is invalid
    } finally {
      setIsLoading(false);  // Stop loading
    }
  };

  return (
    <form onSubmit={fetchWeather}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}  // Update city state as user types
        required
      />
      <button type="submit">Get Weather</button>
      {isLoading && <p>Loading...</p>}  {/* Display loading indicator */}
    </form>
  );
}

export default WeatherForm;
