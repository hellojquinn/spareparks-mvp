// Dropdown Menu JS
document
  .getElementById('title-wrapper')
  .addEventListener('click', function (e) {
    e.stopPropagation();

    var dropdown = document.getElementById('dropdown-menu');

    dropdown.classList.toggle('show');
  });

document.addEventListener('click', function (e) {
  var dropdown = document.getElementById('dropdown-menu');
  var titleWrapper = document.getElementById('title-wrapper');

  if (!titleWrapper.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});

// Location Details Object

const locationDetails = {
  'World Square': {
    address: '644 George St, Sydney NSW 2000',
    hours: 'Operating 24 hours 7 Days',
    customerCare: '24/7 Customer Care: 1300 55 11 31',
  },
  'Queen Victoria Market': {
    address: 'Queen St, Melbourne VIC 3000',
    hours: 'Operating 24 hours 7 Days',
    customerCare: '24/7 Customer Care: 1300 55 11 31',
  },
  'Burwood Plaza': {
    address: '42-50 Railway Parade, Burwood NSW',
    hours: 'Mon-Sun 6am - 10pm',
    customerCare: '24/7 Customer Care: 1300 55 11 31',
  },
  'Rouse Hill Town Centre': {
    address: 'Windsor Rd & White Hart Dr, Rouse Hill NSW',
    hours: 'Operating 24 hours 7 Days',
    customerCare: '24/7 Customer Care: 1300 55 11 31',
  },
};

const locationData = {
  'World Square': { latitude: -33.8765, longitude: 151.20269 },
  'Queen Victoria Market': { latitude: -37.80742, longitude: 144.95678 },
  'Burwood Plaza': { latitude: -33.8752, longitude: 151.1041 },
  'Rouse Hill Town Centre': { latitude: -33.6827, longitude: 150.9186 },
};

// Location Title Change
window.addEventListener('DOMContentLoaded', () => {
  // Initial setup, you can load the default location data here
  const defaultLocation = 'World Square';
  updateLocationDetails(defaultLocation);
  const defaultLocationCoords = locationData[defaultLocation];
  updateWeather(
    defaultLocationCoords.latitude,
    defaultLocationCoords.longitude
  );
});

function changeLocation(locationName) {
  const locationTitle = document.querySelector('#location-name h1');
  const locationImage = document.querySelector('#location-image img');

  // Fade out title and image
  locationTitle.style.transition = 'opacity 0.3s ease';
  locationTitle.style.opacity = 0;
  locationImage.style.transition = 'opacity 0.2s ease';
  locationImage.style.opacity = 0;

  setTimeout(() => {
    // Update title
    locationTitle.textContent = locationName;
    locationTitle.style.opacity = 1;

    // Update location details
    updateLocationDetails(locationName);

    // Update image with fade-in
    locationImage.src = `images/${locationImages[locationName]}`;
    locationImage.alt = locationName;
    requestAnimationFrame(() => {
      locationImage.style.opacity = 1;
    });

    // Update weather
    const coords = locationData[locationName];
    updateWeather(coords.latitude, coords.longitude);
    updateMap(
      coords.latitude,
      coords.longitude,
      locationDetails[locationName].address
    );

    updatePowerBI(locationName);
  }, 200);

  // Close dropdown menu
  document.getElementById('dropdown-menu').classList.remove('show');
}

function updateLocationDetails(locationName) {
  // Retrieve the data for the selected location from the locationDetails object
  const details = locationDetails[locationName];

  // Find the location details container and update its content
  const locationDetailsElement = document.getElementById('location-details');

  // Construct the new content
  const detailsContent = `
      <p>${details.address}
        <br>
        ${details.hours}
        <br>
        ${details.customerCare}
      </p>
    `;

  // Replace the existing content with the new details
  locationDetailsElement.innerHTML = detailsContent;
}

function updatePowerBI(locationName) {
  const iframe = document.getElementById('powerbi-frame');

  iframe.style.transition = 'opacity 0.3s ease';
  iframe.style.opacity = 0;

  setTimeout(() => {
    iframe.src = powerBIReports[locationName];
    iframe.onload = () => {
      iframe.style.opacity = 1;
    };
  }, 300);
}

// Images Object
const locationImages = {
  'World Square': 'worldsquare.jpg',
  'Queen Victoria Market': 'queenvictoriamarket.jpg',
  'Burwood Plaza': 'burwoodplaza.jpg',
  'Rouse Hill Town Centre': 'rousehilltowncentre.jpg',
};

const powerBIReports = {
  'World Square':
    'https://app.powerbi.com/view?r=eyJrIjoiZmY3MjA5OGItNzY4ZC00YzVkLThlOTktOWU3NzdiYzVlMWZjIiwidCI6IjUyYWNmMmQ1LTBkNzktNGUzNS1iNmE2LTk1NTgwZWRiMWU0YyJ9',
  'Queen Victoria Market':
    'https://app.powerbi.com/view?r=eyJrIjoiNzFlZGEyMmMtODc2MC00NzE5LTg1YzEtZWVkNmI3NThiMTY4IiwidCI6IjUyYWNmMmQ1LTBkNzktNGUzNS1iNmE2LTk1NTgwZWRiMWU0YyJ9',
  'Burwood Plaza':
    'https://app.powerbi.com/view?r=eyJrIjoiMzA1ZTE5YWUtNmEzNy00ZWRiLTg3NWEtNzY1MGViYzUyZjA1IiwidCI6IjUyYWNmMmQ1LTBkNzktNGUzNS1iNmE2LTk1NTgwZWRiMWU0YyJ9&pageName=ReportSection120e5ff02127b59b9cd9',
  'Rouse Hill Town Centre':
    'https://app.powerbi.com/view?r=eyJrIjoiYTE0NzMyMDctM2JjNC00MTMzLWI5YjItMmEyYzMyZDVhOTQ3IiwidCI6IjUyYWNmMmQ1LTBkNzktNGUzNS1iNmE2LTk1NTgwZWRiMWU0YyJ9',
};
