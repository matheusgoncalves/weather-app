// Seleção de elementos
const apiKey = "586e7f55a9da3fd4d9eebdfd300e9d62";
const apiContryURL = "https://flagcdn.com/w20/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

// Funções
const showWeatherData = (city) => {
    console.log(city);
};

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});