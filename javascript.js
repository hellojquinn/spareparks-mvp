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

// Location Title Change
window.addEventListener('DOMContentLoaded', () => {
  // Initial setup, you can load the default location data here
  const defaultLocation = 'World Square';
  updateLocationDetails(defaultLocation);
});

function changeLocation(locationName) {
  const locationTitle = document.querySelector('#location-name h1');

  // Fade out the title first
  locationTitle.style.transition = 'opacity 0.3s ease';
  locationTitle.style.opacity = 0;

  // Wait for the fade-out effect, then update the content
  setTimeout(() => {
    locationTitle.textContent = locationName;
    locationTitle.style.opacity = 1;

    // Update the location details dynamically
    updateLocationDetails(locationName);
  }, 300);

  // Close the dropdown menu
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
