// Importación de módulos necesarios para la aplicación Express
const express = require('express'); // Express es un marco web de Node.js
const bodyParser = require('body-parser'); // Middleware para analizar datos del cuerpo de las solicitudes

// Creación de una aplicación Express
const app = express();

// Definición del puerto en el que la aplicación escuchará las solicitudes
const port = 3000;

// Configuración del middleware para analizar datos del cuerpo de las solicitudes con formato URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración del middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Ruta para el punto final /api/weather/:city que maneja solicitudes GET
app.get('/api/weather/:city', async (req, res) => {
    // Obtención del nombre de la ciudad desde los parámetros de la solicitud
    const city = req.params.city;

    try {
        // Obtención de datos reales del clima para la ciudad proporcionada
        const weatherData = await getRealWeatherData(city);

        // Envío de los datos del clima en formato JSON como respuesta
        res.json(weatherData);
    } catch (error) {
        // Manejo de errores y envío de una respuesta de error en caso de falla
        console.error('Error fetching real weather data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para el punto final /weather que maneja solicitudes POST
app.post('/weather', async (req, res) => {
    // Obtención del nombre de la ciudad desde los datos del cuerpo de la solicitud
    const city = req.body.city;

    try {
        // Obtención de datos reales del clima para la ciudad proporcionada
        const weatherData = await getRealWeatherData(city);

        // Envío de los datos del clima en formato JSON como respuesta
        res.json(weatherData);
    } catch (error) {
        // Manejo de errores y envío de una respuesta de error en caso de falla
        console.error('Error fetching real weather data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Inicio del servidor Express y escucha en el puerto especificado
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
