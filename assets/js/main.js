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
  const citybox = document.querySelector('.city-box');
  citybox.style.backgroundcolor = ' rgba(0, 0, 0, 0.3)';
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
  const unsplashLink = `https://source.unsplash.com/1600x900/?${stadt}`;
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
  const foto1 = document.getElementById('foto1');
  const foto2 = document.getElementById('foto2');
  if (städte === 'Amsterdam') {
    infoAnzeige.innerHTML =
      '<h3 style="font-size:2rem ;">Amsterdam </h3> Amsterdam ist die Hauptstadt der Niederlande. Sie ist für ihr künstlerisches Erbe, ein weit verzweigtes Grachtensystem und schmale Häuser mit Giebelfassaden bekannt, die auf das sogenannte Goldene Zeitalter der Stadt im 17. Jahrhundert zurückgehen. Das Museumsviertel beherbergt das Van-Gogh-Museum, das Rijksmuseum mit Werken von Rembrandt und Vermeer sowie das Stedelijk Museum für moderne Kunst. Das Radfahren gehört zur Stadtkultur, sodass das Stadtbild von zahlreichen Radwegen geprägt ist.';

    foto.innerHTML = `<img src='https://cdn.getyourguide.com/img/location/5e32ac00647f6.jpeg/148.jpg' alt="" />`;
    foto1.innerHTML = `<img src='https://www.its.de/image/ws/urlaubsblog/beitraege/bluehende-tulpen-in-amsterdam-staedtereise-im-fruehling/rows/0/image_1400/1200x500/Amsterdam_Header_1400x547.jpg' alt="" />`;
    foto2.innerHTML = `<img src='https://www.cts-reisen.de/_Resources/Persistent/6/2/0/b/620b5e4058394fd2c0cb8253731236c5fbb95fb9/Klassenfahrt-Amsterdam-Gracht-Haeuser.jpg' alt="" />`;
  } else if (städte === 'China') {
    infoAnzeige.innerHTML =
      '<h3 style="font-size:2rem ;">China</h3> China ist ein bevölkerungsreicher Staat in Ostasien, dessen weite Landschaft Grasland, Wüste, Berge, Seen, Flüsse und über 14.000 km Küste umfasst. In der Hauptstadt Peking verbindet sich moderne Architektur mit historischen Stätten wie dem Palastkomplex der Verbotenen Stadt und dem Tian‘anmen-Platz. Shanghai ist ein mit Wolkenkratzern übersätes globales Finanzzentrum. Die berühmte Chinesische Mauer verläuft im Norden des Landes von Ost nach West';

    foto.innerHTML = `<img src="https://www.asiafundmanagers.com/wp-content/uploads/2020/02/China-economy.jpg" alt="">`;
    foto1.innerHTML = `<img src="https://www.fleischwirtschaft.de/news/media/4/China---Shanghai-37008.jpeg" alt="">`;
    foto2.innerHTML = `<img src="https://m.faz.net/media0/ppmedia/aktuell/2479985009/1.6540906/mmobject-still_full/ein-blick-auf-schanghai.jpg" alt="">`;
  } else if (städte === 'Shanghai') {
    infoAnzeige.innerHTML =
      '<h3 style="font-size:2rem ;">Shanghai </h3>Shanghai, die größte Stadt Chinas und ein globaler Finanzplatz, liegt am zentralen Abschnitt der chinesischen Küste. Das Herzstück bildet die berühmte Uferpromenade Bund, an der Gebäude aus der Kolonialzeit liegen. Auf der gegenüberliegenden Seite des Huangpu-Flusses erhebt sich die futuristische Skyline des Bezirks Pudong. Hier stehen unter anderem der 632 m hohe Shanghai Tower und der Fernsehturm Oriental Pearl Tower mit seinen charakteristischen rosa Kugeln. Der weitläufige Yu-Garten umfasst traditionelle Pavillons, Türme und Teiche.';

    foto.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQsYsbTJNFrQ7_0XryHD-vFkx1Ox6DwB68w&usqp=CAU" alt="">`;
    foto1.innerHTML = `<img src="https://www.frankfurt-school.de/.imaging/mte/fs-theme/share-image/dam/about/Alumni/Shanghai-Week/Social-Share-Shanghai.jpg/jcr:content/Social%20Share%20Shanghai.jpg" alt="">`;
    foto2.innerHTML = `<img src="https://international.hs-fresenius.de/wp-content/uploads/2017/02/Shanghai.jpg" alt="">`;
  } else if (städte === 'Hong Kong') {
    infoAnzeige.innerHTML = `<h3 style="font-size:2rem ;">Hong Kong</h3>, Hongkong ist eine sogenannte Sonderverwaltungszone und ehemalige britische Kolonie im südöstlichen China. Das lebendige, dicht besiedelte Stadtzentrum ist ein wichtiger Hafen und ein Finanzzentrum mit einer von Wolkenkratzern geprägten Skyline. Das Geschäftsviertel Central verfügt über architektonische Wahrzeichen wie den Bank of China Tower. Hongkong bietet außerdem hiervorragende Einkaufsmöglichkeiten und bekannt für renommierte Schneider und den Temple Street Night Market`;

    foto.innerHTML = `<img src="https://www.sisinternational.com/wp-content/uploads/2012/11/Hong-Kong-2.jpg" alt="">`;
    foto1.innerHTML = `<img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/4B24/production/_113363291_hkskyline.jpg" alt="">`;
    foto2.innerHTML = `<img src="https://blog.goway.com/globetrotting/wp-content/uploads/2016/03/Hong-Kong-harbour-and-Junk_1.jpg" alt="">`;
  } else if (städte === 'Chicago') {
    infoAnzeige.innerHTML = `<h3>Chicago</h3>Chicago, am Lake Michigan in Illinois, ist eine der größten Städte in den USA. Sie ist bekannt für ihre schöne Architektur, eine von Wolkenkratzern dominierte Skyline, wie das John Hancock Center, der 442 m hohe Willis Tower (ehemals Sears Tower) und der neugotische Tribune Tower. Die Stadt ist auch bekannt für ihre Museen, wie das Art Institute of Chicago mit seinen bekannten Impressionistischen und Post-Impressionistischen Werken.`;

    foto.innerHTML = `<img src="https://www.cu-camper.com/de/magazin/wp-content/uploads/2019/01/usa-chicago-ariel-skyline-facing-south.jpg" alt="">`;
    foto1.innerHTML = `<img src="https://www.visit-usa.at/wp-content/uploads/2016/07/chicago_skyline_std-2.jpg" alt="">`;
    foto2.innerHTML = `<img src="https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/north-america/united-states/chicago/destinations-chicago-banner-mobile-1024x553.jpg" alt="">`;
  } else if (städte === 'NewYork') {
    infoAnzeige.innerHTML = `<h3>NewYork</h3>New York City ist eine Stadt mit 5 Boroughs, die an der Mündung des Hudson River in den Atlantik liegt. Ihr dicht bevölkertes Herzstück bildet Manhattan, eines der bedeutendsten Handels-, Finanz- und Kulturzentren der Welt. Zu den legendären Wahrzeichen Manhattans gehören Wolkenkratzer wie das Empire State Building oder der weitläufige Central Park. Der von Leuchtreklamen erhellte Times Square liegt im Theaterviertel Broadway`;

    foto.innerHTML = `<img src="https://mediafiles.reiseuhu.de/wp-content/uploads/2017/07/new-york-kurztrip-5-tage-im-4-hotel-inkl-fluegen-596e.jpg" alt="">`;
    foto1.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9gouJzWDC9YwP9JL8rTQ8TMgsm9YX4vKFg&usqp=CAU" alt="">`;
    foto2.innerHTML = `<img src="https://static1.squarespace.com/static/53079842e4b0d9a824c5f34b/54bb07fde4b0ff95698d0168/5cc1b33aa4222faad2df5b4a/1556198419120/maxresdefault.jpg?format=1500w" alt="">`;
  } else if (städte === 'Tokio') {
    infoAnzeige.innerHTML = `<h3>Tokio</h3>n der geschäftigen japanischen Hauptstadt Tokio trifft mit Neonlicht und Wolkenkratzern neben historischen Tempeln Ultramodernes auf Traditionelles. Der prunkvolle Meiji-Schrein ist berühmt für sein hoch aufragendes Eingangstor und das bewaldete Umland. Der Kaiserpalast liegt inmitten ausgedehnter öffentlicher Gärten. Die zahlreichen Museen der Stadt beherbergen verschiedene Ausstellungen – von klassischer Kunst (im Nationalmuseum Tokio) bis zu einem rekonstruierten Kabuki-Theater (im Edo-Tokyo-Museum)`;

    foto.innerHTML = `<img src="https://vickiviaja.com/wp-content/uploads/2018/10/best-places-to-stay-in-tokyo.jpg" alt="">`;
    foto1.innerHTML = `<img src="https://www.societybyte.swiss/wp-content/uploads/2019/01/iStock-865939014_ret.jpg" alt="">`;
    foto2.innerHTML = `<img src="https://www.falstaff.de/fileadmin/_processed_/7/1/csm_1-tokio-c-GettyImages-2640_8843be0d7c.jpg" alt="">`;
  } else if (städte === 'München') {
    infoAnzeige.innerHTML = `<h3>München</h3>Das Stadtbild Münchens wird von jahrhundertealte Bauwerken und zahlreichen Museen geprägt. Die bayerische Landeshauptstadt ist für das alljährliche Oktoberfest und ihre Bierhallen bekannt, darunter vor allem das 1589 eröffnete Hofbräuhaus. In der Altstadt am zentralen Marienplatz stehen Wahrzeichen wie das neugotische Neue Rathaus, dessen beliebtes Glockenspiel Melodien und Geschichten aus dem 16. Jahrhundert spielt. `;

    foto.innerHTML = `<img src="https://pbs.twimg.com/media/Emte6ZOW8AMTo8L.jpg" alt="">`;
    foto1.innerHTML = `<img src="https://www.bayern.by/wp-content/uploads/2016/11/muenchen-stadtansicht-berge-1024x369.jpg" alt="">`;
    foto2.innerHTML = `<img src="https://mediafiles.urlaubsguru.de/wp-content/uploads/2017/07/shutterstock_480601912.jpg" alt="">`;
  } else if (städte === 'Hamburg') {
    infoAnzeige.innerHTML = `<h3>Hamburg</h3> Hamburg ist eine bedeutende norddeutsche Hafenstadt, die über die Elbe mit der Nordsee verbunden ist. Die Stadt wird von Hunderten von Kanälen durchzogen, die zum Teil als Fleete bezeichnet werden, und weist außerdem ausgedehnte Park- und Grünflächen auf. Auf der zentrumsnahen Binnenalster fahren Boote, rings um den Stausee liegen zahlreiche Cafés. Der Jungfernstieg verbindet die Neustadt mit der Altstadt, in der Wahrzeichen wie die Hauptkirche Sankt Michaelis aus dem 18. Jh. liegen.`;

    foto.innerHTML = `<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f7/6c/hamburg.jpg?w=1100&h=600&s=1" alt="">`;
    foto1.innerHTML = `<img src="https://www.blueberrysprakresor.se/uploads/claudio-testa-qpemSW6_1Z0-unsplash_r.jpg" alt="">`;
    foto2.innerHTML = `<img src="https://reisemagazin-online.com/wp-content/uploads/2018/10/Hamburg_684050623.jpg" alt="">`;
  } else if (städte === 'Dresden') {
    infoAnzeige.innerHTML = `<h3>Dresden</h3>Dresden, die Hauptstadt des Bundeslandes Sachsen, zeichnet sich durch ihre renommierten Kunstmuseen und die klassische Architektur der rekonstruierten Altstadt aus. Die barocke Frauenkirche, die 1743 fertiggestellt und nach dem 2. Weltkrieg wiederaufgebaut wurde, ist für ihre eindrucksvolle Kuppel bekannt. Der dem Schloss Versailles nachempfundene Zwinger beherbergt mehrere Museen, darunter auch die Gemäldegalerie Alte Meister mit großen Kunstwerken wie der "Sixtinischen Madonna" von Raffael.`;

    foto.innerHTML = `<img src="https://img.oastatic.com/img2/36783069/1080x410r/dresdner-altstadt.jpg" alt="">`;
    foto1.innerHTML = `<img src="https://www.honorarfinanz-ag.de/wp-content/uploads/2017/02/finanzberater-dresden-1400x500.jpg" alt="">`;
    foto2.innerHTML = `<img src="https://images.contentstack.io/v3/assets/blta94287f64af734dc/blta267409f0c4c9334/5e568b06636e530dd5c3c11f/Dresden_iStock-887626544.jpg?auto=webp&format=pjpg&quality=80&width=1200&height=1200&fit=crop&crop=1200:630,smart" alt="">`;
  } else if (städte === 'Leipzig') {
    infoAnzeige.innerHTML = `<h3>Leipzig</h3>Leipzig ist eine Stadt im ostdeutschen Bundesland Sachsen. Am Marktplatz in der Stadtmitte befindet sich das im Renaissancestil errichtete Alte Rathaus mit dem Stadtgeschichtlichen Museum Leipzig. In der spätgotischen Thomaskirche, die für die Konzerte ihres Thomanerchors bekannt ist, liegt Johann Sebastian Bach begraben. Die Nikolaikirche war einst Treffpunkt für die Montagsdemonstrationen, die im Jahr 1989 den Sturz des DDR-Regimes herbeiführten.`;

    foto.innerHTML = `<img src="https://static.hitradio-rtl.de/content/_processed_/7/7/csm_Leipzig_Stadt_Skyline_Copyright_123rf_meinzahn_51d672f1e6.jpg" alt="">`;
    foto1.innerHTML = `<img src="https://www.weser-kurier.de/cms_media/module_img/4959/2479664_1_articlefancybox_48256640.jpg" alt="">`;
    foto2.innerHTML = `<img src="https://www.weser-kurier.de/cms_media/module_img/4959/2479664_1_articlefancybox_48256640.jpg" alt="">`;
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
  return `Ortszeit: ${city1} ${nd.toLocaleString()}`;
}

const zeit = document.getElementById('zeit');
const zeitBerechnung = function () {
  if (city.value === '') {
    // zeit.innerHTML = calcTime('Berlin','+1');
  } else if (city.value === 'Berlin') {
    zeit.innerHTML = calcTime('Berlin', '+1');
  } else if (city.value === 'New York') {
    zeit.innerHTML = calcTime('New York', '-5');
  } else if (city.value === 'Amsterdam') {
    zeit.innerHTML = calcTime('Amsterdam', '+1');
  } else if (city.value === 'München') {
    zeit.innerHTML = calcTime('München', '+1');
  } else if (city.value === 'Hamburg') {
    zeit.innerHTML = calcTime('Hamburg', '+1');
  } else if (city.value === 'Dresden') {
    zeit.innerHTML = calcTime('Dresden', '+1');
  } else if (city.value === 'Leipzig') {
    zeit.innerHTML = calcTime('Leipzig', '+1');
  } else if (city.value === 'Düsseldorf') {
    zeit.innerHTML = calcTime('Düsseldorf', '+1');
  } else if (city.value === 'Lübeck') {
    zeit.innerHTML = calcTime('Lübeck', '+1');
  } else if (city.value === 'Heidelberg') {
    zeit.innerHTML = calcTime('Heidelberg', '+1');
  } else if (city.value === 'Konstanz') {
    zeit.innerHTML = calcTime('Konstanz', '+1');
  } else if (city.value === 'Tokio') {
    zeit.innerHTML = calcTime('Tokio', '+9');
  } else if (city.value === 'Bamberg') {
    zeit.innerHTML = calcTime('Bamberg', '+1');
  } else if (city.value === 'Venedig') {
    zeit.innerHTML = calcTime('Venedig', '+1');
  } else if (city.value === 'Wien') {
    zeit.innerHTML = calcTime('Wien', '+1');
  } else if (city.value === 'London') {
    zeit.innerHTML = calcTime('London', '0');
  } else if (city.value === 'Rom') {
    zeit.innerHTML = calcTime('Rom', '+1');
  } else if (city.value === 'Paris') {
    zeit.innerHTML = calcTime('Paris', '+1');
  } else if (city.value === 'Florenz') {
    zeit.innerHTML = calcTime('Florenz', '+1');
  } else if (city.value === 'Prag') {
    zeit.innerHTML = calcTime('Prag', '+1');
  } else if (city.value === 'Lissabon') {
    zeit.innerHTML = calcTime('Lissabon', '-1');
  } else if (city.value === 'Copenhagen') {
    zeit.innerHTML = calcTime('Copenhagen', '+1');
  } else if (city.value === ' Damascus') {
    zeit.innerHTML = calcTime(' Damascus', '+2');
  } else if (city.value === 'China') {
    zeit.innerHTML = calcTime('China', '+8');
  } else if (city.value === 'Shanghai') {
    zeit.innerHTML = calcTime('Shanghai', '+8');
  } else if (city.value === 'Hong Kong') {
    zeit.innerHTML = calcTime('Hong Kong', '+8');
  } else if (city.value === 'Chicago') {
    zeit.innerHTML = calcTime('Chicago', '-6');
  }
};

// // get Bombay time
// console.log(calcTime('Bombay', '+5.5'));

// // get Singapore time
// console.log(calcTime('Singapore', '+8'));

// // get London time
// console.log(calcTime('London', '+1'));
