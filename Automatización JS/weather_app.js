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
    return newData;
};

const form = document.querySelector('#weather-form');
const loading = document.querySelector('#loading');
const resultSection = document.querySelector('#weather-result');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', handleSearch);

async function handleSearch(event) {
    event.preventDefault();
    const location = event.target.elements.location.value;
    loading.hidden = false;
    resultSection.hidden = true;
    errorMessage.hidden = true;
    const data = await getData(location);
    console.log(data);
    loading.hidden = true;

    if (!data) {
        errorMessage.textContent = "No se pudo obtener el clima para esa ubicación";
        errorMessage.hidden = false;
    }
}

//getData("london");