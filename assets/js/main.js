// https://source.unsplash.com/featured/?{KEYWORD},{KEYWORD}

const form = document.getElementById('form');
const city = document.getElementById('city');
document.querySelector('.hero').style.backgroundImage = `url("https://source.unsplash.com/1440x900/?berlin,city")`;

const api = {
  key: 'dcdc809183f0cf9a1984e5e7f040e299',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const displayResults = function (weather) {
  console.log('displayResults');
  const city1 = document.querySelector('.location .city');
  city1.innerText = ` ${weather.name}, ${weather.sys.country}`;
  const temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span> ˚C </span> `;
  const weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText = weather.weather[0].main;
  const item = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  document.querySelector('.current .icon').setAttribute('src', item);

  // const hilow = document.querySelector('.hi-low');
  // hilow.innerText = `${Math.round(weather.main.temp_min)}˚C / ${Math.round(weather.main.temp_max)} ˚C `;
};

const getResults = function (query) {
  console.log(query);
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => weather.json())
    .then(displayResults);
};

const checkInput = function () {
  const cityName = city.value;
  console.log(cityName);
  document.getElementById('city-name').innerHTML = cityName;
  auswahl(cityName);
};

const auswahl = function (stadt) {
  console.log('ICH KOMME AUS DER FUNCTION checkInput');
  console.log(stadt);
  const unsplashLink = `https://source.unsplash.com/1600x900/?${stadt},city,place`;
  document.querySelector('.hero').style.backgroundImage = `url("${unsplashLink}")`;
  //   document.getElementById('bild').innerHTML = `
  //   <img src=${unsplashLink} alt="${stadt}" />

  // `;
  // document.getElementById('bild').style.background="url(`${unsplashLink}`)"
};

const send = function (e) {
  e.preventDefault();
  // ev.stopPropagation();
  console.log('send geklickt');

  checkInput();
  getResults(city.value);
  info();
  zeitBerechnung();
};

const init = function () {
  form.addEventListener('change', send);
};

document.addEventListener('DOMContentLoaded', init);

/// ///kahled

const info = function () {
  const städte = city.value;
  const infoAnzeige = document.getElementById('info');
  const foto = document.getElementById('foto');
  if (städte === 'Berlin') {
    infoAnzeige.innerHTML =
      '<h3>Berlin </h3> ist die Hauptstadt der Bundesrepublik Deutschland und zugleich eines ihrer Länder. Die Stadt ist mit rund 3,7 Millionen Einwohnern die bevölkerungsreichste und mit 892 Quadratkilometern auch die flächengrößte Gemeinde Deutschlands. Außerdem ist sie damit die einwohnerstärkste Stadt der Europäischen Union.';

    // foto.innerHTML = `<img src='https://source.unsplash.com/1440x900/?${stadt},city,place,people,sightseeing' alt="${städte}" />`;
  } else if (städte === 'Hamburg') {
    infoAnzeige.innerHTML =
      '<h3>Hamburg</h3> ist eine bedeutende norddeutsche Hafenstadt, die über die Elbe mit der Nordsee verbunden ist. Die Stadt wird von Hunderten von Kanälen durchzogen, die zum Teil als Fleete bezeichnet werden, und weist außerdem ausgedehnte Park- und Grünflächen auf. Auf der zentrumsnahen Binnenalster fahren Boote, rings um den Stausee liegen zahlreiche Cafés. Der Jungfernstieg verbindet die Neustadt mit der Altstadt, in der Wahrzeichen wie die Hauptkirche Sankt Michaelis aus dem 18. Jh. liegen';

    // foto.innerHTML = `<img src="https://images.trvl-media.com/media/content/shared/images/travelguides/Hamburg-and-vicinity-180004-desktopRetina.jpg" alt="">`;
  } else if (städte === 'München') {
    infoAnzeige.innerHTML =
      '<h3>München </h3>Das Stadtbild Münchens wird von jahrhundertealte Bauwerken und zahlreichen Museen geprägt. Die bayerische Landeshauptstadt ist für das alljährliche Oktoberfest und ihre Bierhallen bekannt, darunter vor allem das 1589 eröffnete Hofbräuhaus. In der Altstadt am zentralen Marienplatz stehen Wahrzeichen wie das neugotische Neue Rathaus, dessen beliebtes Glockenspiel Melodien und Geschichten aus dem 16. Jahrhundert spielt.';

    // foto.innerHTML = `<img src="https://www.marktforschung.de/fileadmin/user_upload/Redaktion/Diverses/muenchen-r.babakin-fotolia.jpg" alt="">`;
  } else if (städte === 'Dresden') {
    infoAnzeige.innerHTML = `<h3>Dresden</h3>, die Hauptstadt des Bundeslandes Sachsen, zeichnet sich durch ihre renommierten Kunstmuseen und die klassische Architektur der rekonstruierten Altstadt aus. Die barocke Frauenkirche, die 1743 fertiggestellt und nach dem 2. Weltkrieg wiederaufgebaut wurde, ist für ihre eindrucksvolle Kuppel bekannt. Der dem Schloss Versailles nachempfundene Zwinger beherbergt mehrere Museen, darunter auch die Gemäldegalerie Alte Meister mit großen Kunstwerken wie der "Sixtinischen Madonna" von Raffael`;

    foto.innerHTML = `<img src="https://cdn.getyourguide.com/img/location/540eb6a604bed.jpeg/148.jpg" alt="">`;
  } else if (städte === 'Leipzig') {
    infoAnzeige.innerHTML = `<h3>Leipzig</h3>ist eine Stadt im ostdeutschen Bundesland Sachsen. Am Marktplatz in der Stadtmitte befindet sich das im Renaissancestil errichtete Alte Rathaus mit dem Stadtgeschichtlichen Museum Leipzig. In der spätgotischen Thomaskirche, die für die Konzerte ihres Thomanerchors bekannt ist, liegt Johann Sebastian Bach begraben. Die Nikolaikirche war einst Treffpunkt für die Montagsdemonstrationen, die im Jahr 1989 den Sturz des DDR-Regimes herbeiführten`;

    // foto.innerHTML = `<img src="https://www.kurzurlaub.de/img/statisch_teaser/de/teaser_image_953_ort-kurzreisen-leipzig.jpg" alt="">`;
  } else if (städte === 'Bamberg') {
    infoAnzeige.innerHTML = `<h3>Bamberg</h3>ist eine Stadt im Norden des deutschen Bundeslandes Bayern. Sie liegt an der Mündung der Flüsse Regnitz und Main und erstreckt sich über 7 Hügel. Die Altstadt zeichnet sich durch ihre gut erhaltenen Bauten aus dem 11. bis 19. Jahrhundert aus, darunter auch das mit Fassadenmalereien geschmückte Alte Rathaus, das sich auf einer Insel in der Regnitz befindet und über Bogenbrücken erreichbar ist. Der romanische Bamberger Dom, dessen Bau im 11. Jahrhundert begann, verfügt über 4 Türme und zahlreiche Steinskulpturen.`;

    // foto.innerHTML = `<img src="https://i0.wp.com/karrieresprungblog.com/wp-content/uploads/2019/06/jobs-in-bamberg-franken.jpg?fit=1000%2C667&ssl=1" alt="">`;
  } else if (städte === 'Düsseldorf') {
    infoAnzeige.innerHTML = `<h3>Düsseldorf</h3>Düsseldorf ist eine bekannte Mode- und Kunststadt im Westen von Deutschland. Während sich am Ostufer des Rheins die Altstadt erstreckt, liegen westlich vom Fluss moderne Geschäfts- und Handelsviertel. Die Kirche Sankt Lambertus und der Schlossturm (beide in der Altstadt) gehen jeweils auf das 13. Jh. zurück. Entlang der Königsallee und in der Schadowstraße befinden sich zahlreiche exklusive Boutiquen.`;

    // foto.innerHTML = `<img src="https://www.hotel-imperial-duesseldorf.de/wp-content/uploads/2018/04/home_03.jpg" alt="">`;
  } else if (städte === 'Lübeck') {
    infoAnzeige.innerHTML = `<h3>Lübeck</h3>ist eine norddeutsche Stadt, die sich durch ihre Bauten im Stil der Backsteingotik auszeichnet. Diese entstanden im Mittelalter, als Lübeck die Hauptstadt der Hanse war. Das Wahrzeichen der Stadt ist das Holstentor aus Backstein, das im Jahr 1478 vollendet wurde und dazu diente, die auf einer Insel in der Trave gelegene Altstadt abzuschirmen. Die Marienkirche, die nach dem 2. Weltkrieg wiederaufgebaut wurde, ist ein im 13.–14. Jahrhundert errichteter Backsteinbau, der als architektonisches Vorbild für viele nordeuropäische Kirchen diente. `;

    // foto.innerHTML = `<img src="https://ostseemagazin.net/wp-content/uploads/2017/08/Altstadt-Luftaufnahme-Luebeck.jpg" alt="">`;
  } else if (städte === 'Heidelberg') {
    infoAnzeige.innerHTML = `<h3>Heidelberg</h3> ist eine Stadt am Neckar im Südwesten Deutschlands. Sie ist bekannt für die altehrwürdige Universität, die im 14. Jahrhundert gegründet wurde. Die gotische Heiliggeistkirche überragt den von Cafés gesäumten Marktplatz inmitten der Altstadt. Die roten Sandsteinruinen des Heidelberger Schlosses sind ein bekanntes Beispiel für die Architektur der Renaissance und stehen auf dem Hügel Königstuhl`;

    foto.innerHTML = `<img src="https://cdn.wohnglueck.de/vary/content/2019/07/immort-Region-Heidelberg-2_content-1400x788@2x.jpg" alt="">`;
  } else if (städte === 'Köln') {
    infoAnzeige.innerHTML = `<h3>Köln</h3>ist eine 2.000 Jahre alte, im Westen Deutschlands gelegene Stadt am Rhein und das kulturelle Zentrum seiner Region. Wahrzeichen der Stadt ist der gotische Dom mit seinen beiden Türmen. Er steht in der wiederaufgebauten Altstadt und ist bekannt für seinen Dreikönigsschrein und den Blick über den Rhein. Das nahe gelegene Museum Ludwig zeigt Kunst des 20. Jahrhunderts, darunter viele Werke Pablo Picassos. Das Römisch-Germanische Museum beherbergt Objekte aus der Römerzeit.`;

    // foto.innerHTML = `<img src="https://www.citynews-koeln.de/wp-content/uploads/2018/12/koeln-reise-ziel-dom-citynews.jpg" alt="">`;
  } else if (städte === 'Konstanz') {
    infoAnzeige.innerHTML = `<h3>Konstanz</h3>Konstanz ist eine süddeutsche Stadt am Bodensee. Im gut erhaltenen mittelalterlichen Stadtteil Niederburg befindet sich das romanische Konstanzer Münster, das für seine verschiedenen Architekturstile und seine gotische Turmspitze bekannt ist. Das Rathaus zeichnet sich durch seine mit aufwendigen Fresken bemalte Fassade und seinen Innenhof im Renaissancestil aus. Das Rosgartenmuseum befasst sich mit der Kulturgeschichte der Region und beherbergt Ausstellungsobjekte aus der Vorgeschichte bis ins 20. Jahrhundert`;

    // foto.innerHTML = `<img src="https://www.imaginemag.ch/wp-content/uploads/2020/05/Konstanz-Panorama_Bildnachweis_MTK-Dagmar-Schwelle-1024x683.jpg" alt="">`;
  }

  // ____________ausländisch
  else if (städte === 'Venedig') {
    infoAnzeige.innerHTML = `<h3>Venedig</h3> ist die Hauptstadt der Region Venetien in Norditalien und wurde auf mehr als 100 kleinen Inseln in einer Adria-Lagune erbaut. Als Verkehrswege gibt es dort nur wenige Straßen und fast ausschließlich Kanäle, darunter den Canale Grande mit seinen Palästen aus der Renaissance und Gotik. Am zentralen Markusplatz befindet sich der Markusdom mit byzantinischen Mosaiken und dem Glockenturm, von dem aus der Blick über die roten Dächer der Stadt geht.`;

    // foto.innerHTML = `  <img src="https://www.dialog.de/fileadmin/media/img/sprachreisen/erwachsene/italien/venedig/venedig-header.jpg" alt="">
    // `;
  } else if (städte === 'Amsterdam') {
    infoAnzeige.innerHTML = `<h3>Amsterdam</h3>ist die Hauptstadt der Niederlande. Sie ist für ihr künstlerisches Erbe, ein weit verzweigtes Grachtensystem und schmale Häuser mit Giebelfassaden bekannt, die auf das sogenannte Goldene Zeitalter der Stadt im 17. Jahrhundert zurückgehen. Das Museumsviertel beherbergt das Van-Gogh-Museum, das Rijksmuseum mit Werken von Rembrandt und Vermeer sowie das Stedelijk Museum für moderne Kunst. Das Radfahren gehört zur Stadtkultur, sodass das Stadtbild von zahlreichen Radwegen geprägt ist.`;

    // foto.innerHTML = `<img src="https://mediafiles.urlaubsguru.de/wp-content/uploads/2019/05/Hausboote-in-Amsterdam-shutterstock_656151523.jpg" alt="">`;
  } else if (städte === 'Wien') {
    infoAnzeige.innerHTML = `<h3>Wien</h3>Die Hauptstadt Österreichs, liegt im Osten des Landes an der Donau. Ihr künstlerisches und intellektuelles Erbe wurde von Bewohnern wie Mozart, Beethoven und Sigmund Freud geprägt. Die Stadt ist auch bekannt für ihre kaiserlichen Paläste wie das Schloss Schönbrunn, die Sommerresidenz der Habsburger. Im MuseumsQuartier sind in historischen und modernen Gebäuden unter anderem Werke von Egon Schiele und Gustav Klimt zu sehen.`;

    // foto.innerHTML = `<img src="https://1000things.b-cdn.net/wp-content/uploads/maedels-in-wien-2000x1200.jpg" alt="">`;
  } else if (städte === 'London') {
    infoAnzeige.innerHTML = `<h3>London</h3>Hauptstadt Englands und Großbritanniens, ist eine moderne Stadt, deren Wurzeln in die Zeit des Römischen Reiches zurückgehen. In ihrem Zentrum stehen die imposanten Houses of Parliament, der legendäre Uhrturm „Big Ben“ und Westminster Abbey, Krönungsstätte der britischen Monarchen. Am anderen Ufer der Themse befindet sich das Riesenrad London Eye, das einen Panoramablick auf den Kulturbezirk South Bank und den Rest der Stadt eröffnet`;

    // foto.innerHTML = `<img src="https://www.wdrmaus.de/bilder/mediendb/maus_2015/extras/ralphs_tagebuecher/grossbritannien/london_panorama.jpg" alt="">`;
  } else if (städte === 'Rom') {
    infoAnzeige.innerHTML = `<h3>Rom</h3>Hauptstadt Italiens, ist eine kosmopolitische Großstadt, die fast 3.000 Jahre Kunstgeschichte, Architektur und Kultur von Weltrang vorweisen kann. Antike Ruinen wie das Forum und das Kolosseum zeugen von der einstigen Macht des Römischen Reiches. Die Vatikanstadt, Sitz der römisch-katholischen Kirche, ist Standort des Petersdoms und der Vatikanischen Museen, in denen Meisterwerke wie die Fresken Michelangelos in der Sixtinischen Kapelle beheimatet sind.`;

    // foto.innerHTML = `<img src="https://www.skr.de/blog/fileadmin/_processed_/d/3/csm_IT_Italien_Rom_0216_Vatikanstadt_S-F_shutterstock_125398649_5b5fd95f70.jpg" alt="">`;
  } else if (städte === 'Paris') {
    infoAnzeige.innerHTML = `<h3>Paris</h3>Die französische Hauptstadt Paris ist eine der bedeutendsten Großstädte Europas und zählt zu den führenden Zentren für Kunst, Mode, Gastronomie und Kultur weltweit. Das Stadtbild ist geprägt von der Architektur des 19. Jh. sowie von breiten Boulevards und der Seine. Neben Wahrzeichen wie dem Eiffelturm und der gotischen Kathedrale Notre-Dame aus dem 12. Jh. ist Paris auch für seine Café-Kultur und die Modeboutiquen in der Rue du Faubourg Saint-Honoré bekannt`;

    // foto.innerHTML = `<img src="https://iska-auslandsjahr.com/wp-content/uploads/paris_frankreich_eiffelturm_800x500.jpg" alt="">`;
  } else if (städte === 'Florenz') {
    infoAnzeige.innerHTML = `<h3>Florenz</h3>ist die Hauptstadt der italienischen Region Toskana. Bekannt ist Florenz vor allem für seine zahlreichen Kunst- und Architektur-Meisterwerke der Renaissance. Zu den berühmtesten Sehenswürdigkeiten zählt der Duomo. Diese Kathedrale hat eine mit Ziegelmauerwerk verblendete Kuppel des Baumeisters Brunelleschi und einen Glockenturm von Giotto. Die Galleria dell'Accademia zeigt Michelangelos Statue "David". In den Uffizien sind Botticellis Gemälde "Die Geburt der Venus" und da Vincis "Die Verkündigung" zu sehen. `;

    // foto.innerHTML = `<img src="https://reisemagazin-online.com/wp-content/uploads/2019/06/Florenz_530427883.jpg" alt="">`;
  } else if (städte === 'Prag') {
    infoAnzeige.innerHTML = `<h3>Prag</h3>Prag ist die Hauptstadt der Tschechischen Republik und liegt an der Moldau. Die "Stadt der hundert Türme" ist bekannt für den Altstädter Ring mit bunten Barockgebäuden, gotischen Kirchen und der mittelalterlichen astronomischen Uhr, an der zu jeder Stunde ein animiertes Glockenspiel zu sehen ist. Die 1402 fertiggestellte Karlsbrücke mit Statuen katholischer Heiliger ist für den Autoverkehr gesperrt. `;

    // foto.innerHTML = `<img src="https://prag.de/wp-content/uploads/2017/11/Prag-Moldau-ein-Fluss-in-der-Hauptstadt-von-Tschechien.jpg" alt="">`;
  } else if (städte === 'Lissabon') {
    infoAnzeige.innerHTML = `<h3>Lissabon</h3>Lissabon ist die Hauptstadt Portugals und liegt auf hügeligem Gelände an der Atlantikküste. Vom imposanten Castelo de São Jorge aus bietet sich ein weiter Blick über die gesamte Altstadt mit ihren pastellfarbenen Häusern, die Tejomündung und die Hängebrücke Ponte 25 de Abril. Das Museu Nacional do Azulejo zeigt dekorative Keramikfliesen aus 5 Jahrhunderten. Außerhalb Lissabons erstreckt sich zwischen Cascais und Estoril eine Reihe von Stränden am Atlantik.`;

    // foto.innerHTML = `<img src="https://reisemagazin-online.com/wp-content/uploads/2018/12/Lissabon_759868507.jpg" alt="">`;
  } else if (städte === 'Kopenhagen') {
    infoAnzeige.innerHTML = `<h3>Kopenhagen</h3>Kopenhagen, Dänemarks Hauptstadt, liegt auf den küstennahen Inseln Seeland und Amager. Über die Öresund-Brücke ist die Stadt mit Malmö in Südschweden verbunden. In Indre By, der historischen Altstadt, befindet sich Frederiksstaden, ein Rokokoviertel mit dem Schloss Amalienborg, Residenz der königlichen Familie. In der Nähe liegen das Schloss Christiansborg und inmitten von Gärten das Renaissanceschloss Rosenborg, das die Kronjuwelen beherbergt.`;

    // foto.innerHTML = `<img src="https://m.merian.de/sites/merian/files/styles/1024x768/public/images/merian_kopenhagen_139.jpg" alt="">`;
  }
};

// function to calculate local time
// in a different city
// given the city's UTC offset
function calcTime(city1, offset) {
  // create Date object for current location
  const d = new Date();

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  const nd = new Date(utc + 3600000 * offset);

  // return time as a string
  return `The local time in ${city1} is ${nd.toLocaleString()}`;
}

const zeit = document.getElementById('zeit');
const zeitBerechnung = function () {
  if (city.value === 'Berlin') {
    zeit.innerHTML = calcTime('Berlin', '+1');
  } else if (city.value === 'New York') {
    zeit.innerHTML = calcTime('New York', '-5');
  } else if (city.value === 'Tokio') {
    zeit.innerHTML = calcTime('Tokio', '+9');
  } else if (city.value === 'Hamburg') {
    zeit.innerHTML = calcTime('Hamburg', '+1');
  }
};

// // get Bombay time
// console.log(calcTime('Bombay', '+5.5'));

// // get Singapore time
// console.log(calcTime('Singapore', '+8'));

// // get London time
// console.log(calcTime('London', '+1'));
