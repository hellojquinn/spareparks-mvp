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

// Location Title Change

window.addEventListener('DOMContentLoaded', () => {});

function changeLocation(locationName) {
  const locationTitle = document.querySelector('#location-name h1');

  // Fade out
  locationTitle.style.transition = 'opacity 0.3s ease';
  locationTitle.style.opacity = 0;

  setTimeout(() => {
    locationTitle.textContent = locationName;

    locationTitle.style.opacity = 1;
  }, 300);

  document.getElementById('dropdown-menu').classList.remove('show');
}
