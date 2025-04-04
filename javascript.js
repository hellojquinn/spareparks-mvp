document
  .getElementById('title-wrapper')
  .addEventListener('click', function (e) {
    // Prevent event propagation to the document listener
    e.stopPropagation();

    var dropdown = document.getElementById('dropdown-menu');

    // Toggle the dropdown visibility with fade effect
    dropdown.classList.toggle('show');
  });

// Close the dropdown if clicking anywhere outside of the dropdown or button
document.addEventListener('click', function (e) {
  var dropdown = document.getElementById('dropdown-menu');
  var titleWrapper = document.getElementById('title-wrapper');

  // If the click target is outside of titleWrapper (where the dropdown button is)
  if (!titleWrapper.contains(e.target)) {
    dropdown.classList.remove('show'); // Fade out and hide the dropdown
  }
});
