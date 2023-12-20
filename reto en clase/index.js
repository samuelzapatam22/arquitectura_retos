// Función asincrónica para obtener datos del clima
async function fetchWeather() {
    // Obtener el nombre de la ciudad desde el campo de entrada en el formulario
    const city = document.getElementById("city").value;
    // Obtener el contenedor para mostrar la información del clima
    const weatherInfoContainer = document.getElementById("weather-info");

    try {
        // Clave de la API para acceder a OpenWeatherMap
        const apiKey = '1c78da2e186c63f952450c9b21bc8a5b';

        // Realizar una solicitud a la API de OpenWeatherMap para obtener datos del clima
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const weatherData = await response.json();

        // Mostrar la información del clima en el contenedor
        weatherInfoContainer.innerHTML = generateWeatherHTML(weatherData);
    } catch (error) {
        // Manejar errores y mostrar un mensaje de error en caso de falla
        console.error("Error fetching weather data:", error);
        weatherInfoContainer.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
    }
}

// Función para generar el HTML que muestra la información del clima
function generateWeatherHTML(weatherData) {
    return `
        <h2>Weather Information for ${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Pressure: ${weatherData.main.pressure} hPa</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
    `;
}