const buildMarker = require('./marker');
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiamFzY2hvIiwiYSI6ImNqdjJpanZlOTI1bWE0M3Nrb2RtcmttcmcifQ.fAG7rUF-I2MOCoOV2kO3QA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

// const divElement = document.createElement('div');
// divElement.style.width = '32px';
// divElement.style.height = '39px';
// divElement.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

// new mapboxgl.Marker(divElement).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker('activity', [-74.009151, 40.705086]);
marker.addTo(map);
