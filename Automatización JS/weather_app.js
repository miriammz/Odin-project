async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=CHSZP9SQ49KD6CS7QRMMU9UUP`)
        // para pillar errores de la API
        if (!response.ok) {
            throw new Error(`Error ${response.status}: no se pudo obtener el clima`);
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log(error);
    }  
};

async function getData(location) {
    const response = await getWeather(location);
    if (!response) {
        console.log("No se pudieron obtener los datos del clima");
        return;
    }
    const newData = {"location": response.resolvedAddress, "temperature": response.currentConditions.temp, "conditions": response.currentConditions.conditions, "feelslike": response.currentConditions.feelslike, "icon": response.currentConditions.icon};
    console.log(newData);
};
getData("london");