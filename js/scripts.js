// Seleção de elementos
const apiKey = "586e7f55a9da3fd4d9eebdfd300e9d62";
const apiContryURL = "https://flagsapi.com/BR/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityEl = document.querySelector("#city");
const tempEl = document.querySelector("#temperature span");
const descEl = document.querySelector("#description");
const weatherIconEl = document.querySelector("#weather-icon");
const countryEl = document.querySelector("#country");
const humidityEl = document.querySelector("#humidity span");
const windEl = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

// Funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityEl.innerText = data.name;
    tempEl.innerText = parseInt(data.main.temp);
    descEl.innerText = data.weather[0].description;
    weatherIconEl.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryEl.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityEl.innerText = `${data.main.humidity}%`;
    windEl.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");
};

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;

        showWeatherData(city);
    }
});