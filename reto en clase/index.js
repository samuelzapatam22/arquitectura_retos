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