import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

const init = () => {
  const myMap = new ymaps.Map("map", {
    center: [8.489695, 76.946597],
    zoom: 8.5
  });

  myMap.behaviors.disable('scrollZoom');

  myMap.geoObjects
      .add(new ymaps.Placemark([8.489695, 76.946597], {
        balloonContent: 'Hey <strong>there!</strong>'
      }));
};

ymaps.ready(init);