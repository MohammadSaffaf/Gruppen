const api = {
    key : "dcdc809183f0cf9a1984e5e7f040e299" ,
    base:"https://api.openweathermap.org/data/2.5/"
    }
    // console.log(api);
    const searchBox = document.querySelector('.search-box')
    searchBox.addEventListener('keypress',setQuery)
    
    function setQuery(evt) {
        if (evt.keyCode == 13) {
            getResults(searchBox.value);
    
        }
    }
    
    function getResults(query) {
        fetch( `${api.base}weather?q=${query}&units=metric&APPID=${api.key}` )
        .then(weather => weather.json())
        .then(displayResults)
    }
    
    
    function displayResults(weather) {
        let city = document.querySelector('.location .city');
        city.innerText = ` ${weather.name}, ${weather.sys.country}`;
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span> ˚C </span> `;
        let weather_el = document.querySelector('.current .weather')
        weather_el.innerText = weather.weather[0].main;
        let item = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        document.querySelector('.current .icon').setAttribute('src',item)
    
        let hilow = document.querySelector('.hi-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)}˚C / ${Math.round(weather.main.temp_max)} ˚C `;
    
    }
    const form = document.getElementById('form');
const city = document.getElementById('city');

const auswahl = function (stadt) {
  console.log('ICH KOMME AUS DER FUNCTION checkInput');
  console.log(stadt);
  const unsplashLink = `https://source.unsplash.com/1600x900/?${stadt},city`;
  document.getElementById('bild').innerHTML = `
  <img src=${unsplashLink} alt="${stadt}" />
`;
};

const checkInput = function () {
  const cityName = city.value;
  console.log(cityName);
  document.getElementById('city-name').innerHTML = cityName;
  auswahl(cityName);
};

const send = function (e) {
  e.preventDefault();
  // ev.stopPropagation();
  console.log('send geklickt');

  checkInput();
};

const init = function () {
  form.addEventListener('submit', send);
};

document.addEventListener('DOMContentLoaded', init);