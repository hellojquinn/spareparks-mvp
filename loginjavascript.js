// Get the popup and buttons
var popup = document.getElementById('contact-popup');
var contactBtn = document.getElementById('contact-us');
var closeBtn = document.getElementById('close-btn');

// When the user clicks the "Contact Us" button, show the popup with fade-in effect
contactBtn.onclick = function () {
  popup.classList.add('show');
};

// When the user clicks the close button, hide the popup with fade-out effect
closeBtn.onclick = function () {
  popup.classList.remove('show');
};

// When the user clicks anywhere outside the popup,
window.onclick = function (event) {
  if (event.target == popup) {
    popup.classList.remove('show');
  }
};
