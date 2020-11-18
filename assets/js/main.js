// https://source.unsplash.com/featured/?{KEYWORD},{KEYWORD}

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
