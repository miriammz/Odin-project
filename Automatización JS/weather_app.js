async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=CHSZP9SQ49KD6CS7QRMMU9UUP`)
        // para pillar errores de la API
        if (!response.ok) {
            throw new Error(`Error ${response.status}: no se pudo obtener el clima`);
        }
        const weatherData = await response.json();
        console.log(weatherData);
    } catch (error) {
        console.log(error);
    }  
};
getWeather("london");