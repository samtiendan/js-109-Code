let app_ID = '7674da634845e7c2d8c53ab0a48b8e29'
let DEFAULT_VALUE = '--';
let searchInput = document.querySelector('#search-input');
let cityName = document.querySelector('.city-name');
let weatherState = document.querySelector('.weather-state');
let weatherIcon = document.querySelector('.weather-icon');
let temperature = document.querySelector('.temperature');

searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${app_ID}&units=metric`)
    .then(async res => {
        let data = await res.json();
        console.log('[Search Input]', data);
        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
    });
});