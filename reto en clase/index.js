async function fetchWeather() {
    const city = document.getElementById("city").value;
    const weatherInfoContainer = document.getElementById("weather-info");

    try {
        const apiKey = '1c78da2e186c63f952450c9b21bc8a5b'; // Reemplaza con tu clave API real de OpenWeatherMap

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const weatherData = await response.json();

        // Display weather information
        weatherInfoContainer.innerHTML = generateWeatherHTML(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        // Display error message
        weatherInfoContainer.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
    }
}

async function fetchWeather() {
    const city = document.getElementById("city").value;
    const weatherInfoContainer = document.getElementById("weather-info");

    try {
        const apiKey = '1c78da2e186c63f952450c9b21bc8a5b'; // Reemplaza con tu clave API real de OpenWeatherMap

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const weatherData = await response.json();

        // Display weather information
        weatherInfoContainer.innerHTML = generateWeatherHTML(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        // Display error message
        weatherInfoContainer.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
    }
}

function generateWeatherHTML(weatherData) {
    return `
        <h2>Weather Information for ${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Pressure: ${weatherData.main.pressure} hPa</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
    `;
}
