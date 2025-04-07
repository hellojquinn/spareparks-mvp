let map; // Declare map globally so it's accessible across functions
let marker;
let trafficLayer;

function initMap() {
  const defaultCoords = { lat: -33.8765, lng: 151.2069 };

  map = new google.maps.Map(document.getElementById('rt-traffic'), {
    center: defaultCoords,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  marker = new google.maps.Marker({
    position: defaultCoords,
    map: map,
    label: {
      text: '644 George St, Sydney',
      color: 'black',
      fontSize: '16px',
      fontWeight: 'light',
    },
  });

  trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

function updateMap(latitude, longitude, labelText) {
  const mapElement = document.getElementById('rt-traffic');

  // Fade out
  mapElement.style.transition = 'opacity 0.3s ease';
  mapElement.style.opacity = 0;

  setTimeout(() => {
    const newLocation = { lat: latitude, lng: longitude };

    map.setCenter(newLocation);
    marker.setPosition(newLocation);
    marker.setLabel({
      text: labelText,
      color: 'black',
      fontSize: '16px',
      fontWeight: 'light',
    });

    // Fade back in
    requestAnimationFrame(() => {
      mapElement.style.opacity = 1;
    });
  }, 300);
}
