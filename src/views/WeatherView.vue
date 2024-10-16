<template>
    <div class="container">
      <header class="header">
        <h1>WEATHER APP</h1>
        <div class="search-bar">
          <input
            type="text"
            v-model="city"
            placeholder="Enter city name"
            class="search-input"
          />
          <button @click="searchByCity" class="search-button">Search</button>
        </div>
      </header>
      <main v-if="weatherData" class="weather-info">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <div class="weather-details">
          <img :src="iconUrl" alt="Weather Icon" class="weather-icon" />
          <p class="temperature">{{ temperature }} °C</p>
        </div>
        <span class="description">{{ weatherData.weather[0].description }}</span>
      </main>
      <p v-else class="no-data">Enter a city name to get weather information.</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  const apikey = "909b78a4d060f1aa7bcf1c553678d1c8";
  
  export default {
    name: "App",
    data() {
      return {
        city: "",
        weatherData: null,
      };
    },
    computed: {
      temperature() {
        return this.weatherData
          ? Math.floor(this.weatherData.main.temp - 273.15)
          : null;
      },
      iconUrl() {
        return this.weatherData
          ? `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
          : null;
      },
    },
    mounted() {
      this.fetchCurrentLocationWeather();
    },
    methods: {
      async fetchCurrentLocationWeather() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
            await this.fetchWeatherData(url);
          });
        }
      },
      async fetchWeatherData(url) {
        try {
          const response = await axios.get(url);
          this.weatherData = response.data;
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
      async searchByCity() {
        if (this.city) {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
          await this.fetchWeatherData(url);
        }
      },
    },
  };
  </script>
  