const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Ruta para el endpoint /api/weather/:city
app.get('/api/weather/:city', (req, res) => {
    const city = req.params.city;
    const weatherData = getMockWeatherData(city);
    res.json(weatherData);
});

// Ruta para el endpoint /weather
app.post('/weather', (req, res) => {
    const city = req.body.city;
    const weatherData = getMockWeatherData(city);
    res.send(weatherData);
});

// Función de simulación de datos para la API del clima
function getMockWeatherData(city) {
    return {
        city: city,
        temperature: Math.floor(Math.random() * 30) + 1,
        humidity: Math.floor(Math.random() * 100) + 1,
        pressure: Math.floor(Math.random() * 1000) + 1,
        wind: Math.floor(Math.random() * 20) + 1
    };
}
