function initMap() {
  const location = { lat: -33.8765, lng: 151.2069 }; // Coordinates of 644 George St, Sydney

  const map = new google.maps.Map(document.getElementById('rt-traffic'), {
    center: location,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    label: {
      text: '644 George St, Sydney',
      color: 'black',
      fontSize: '16px',
      fontWeight: 'light',
    },
  });

  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}
