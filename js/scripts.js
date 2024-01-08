// Seleção de elementos
const apiKey = "586e7f55a9da3fd4d9eebdfd300e9d62";
const apiContryURL = "https://flagcdn.com/w20/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityEl = document.querySelector("#city");
const tempEl = document.querySelector("#temperature span");
const descEl = document.querySelector("#description");
const weatherEl = document.querySelector("#weather-icon");
const countryEl = document.querySelector("#country");
const umidityEl = document.querySelector("#umidity span");
const windEl = document.querySelector("#wind span");

// Funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data);
}

const showWeatherData = (city) => {
    getWeatherData(city);
};

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});