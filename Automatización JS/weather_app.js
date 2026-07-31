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
const unitToggle = document.querySelector('#unit-toggle');

form.addEventListener('submit', handleSearch);

let currentData = null;

function displayWeather(data) {
    currentData = data;
    document.querySelector('#location').textContent = data.location;
    document.querySelector('#conditions').textContent = data.conditions;
    document.querySelector('#icon').textContent = data.icon;
    renderTemperatures();
    resultSection.hidden = false;
    unitToggle.hidden = false;
}

function fahrenheitToCelsius(f) {
    return (f - 32)* 5/9;
}

let isCelsius = false;
function changeDegrees() {
    isCelsius = !isCelsius;
    renderTemperatures();
}

unitToggle.addEventListener('click', changeDegrees);

function renderTemperatures() {
    if (!currentData) return;
    const temp = isCelsius ? fahrenheitToCelsius(currentData.temperature) : currentData.temperature;
    const feels = isCelsius ? fahrenheitToCelsius(currentData.feelslike) : currentData.feelslike;
    document.querySelector('#temperature').textContent = temp.toFixed(1);
    document.querySelector('#feelslike').textContent = feels.toFixed(1);
}

async function handleSearch(event) {
    event.preventDefault();
    const location = event.target.elements.location.value;
    loading.hidden = false;
    resultSection.hidden = true;
    errorMessage.hidden = true;
    const data = await getData(location);
    loading.hidden = true;

    if (!data) {
        errorMessage.textContent = "No se pudo obtener el clima para esa ubicación";
        errorMessage.hidden = false;
    } else {
        displayWeather(data);
    }
}
//getData("london");