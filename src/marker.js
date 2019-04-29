const { Marker } = require('mapbox-gl');

const iconUrls = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
};

const buildMarker = function(type, coordinates) {
  const typeUrl = iconUrls[type];

  const divElement = document.createElement('div');
  divElement.style.width = '32px';
  divElement.style.height = '39px';
  divElement.style.backgroundImage = `url(${typeUrl})`;

  return new Marker(divElement).setLngLat(coordinates);
  console.log(type, typeUrl);
  console.log(coordinates);
};

module.exports = buildMarker;
