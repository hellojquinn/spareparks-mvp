// Get the elements
const ratesPanel = document.getElementById('rates-panel');
const ratesInfoPanel = document.getElementById('rates-info-panel');
const closePanel = document.getElementById('close-panel');

// Event listener to open the panel when clicked
ratesPanel.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior

  // First, remove the 'hidden' class to allow the panel to be visible
  ratesInfoPanel.classList.remove('hidden');

  // Remove the fade-out class if it exists (in case it's still there from closing)
  ratesInfoPanel.classList.remove('fade-out');

  // Add a slight delay before applying fade-in class for the transition
  setTimeout(() => {
    ratesInfoPanel.classList.add('fade-in');
  }, 10); // 10ms delay to make sure 'hidden' is removed first
});

// Event listener to close the panel when the close button is clicked
closePanel.addEventListener('click', function () {
  ratesInfoPanel.classList.add('fade-out'); // Trigger fade-out

  setTimeout(() => {
    ratesInfoPanel.classList.remove('fade-in'); // Remove fade-in class
    ratesInfoPanel.classList.add('hidden'); // Actually hide the panel
  }, 300); // Match the duration of your fade-out transition
});

// Event listener to close the panel when clicking outside of it
document.addEventListener('click', function (e) {
  if (!ratesInfoPanel.contains(e.target) && e.target !== ratesPanel) {
    ratesInfoPanel.classList.add('fade-out'); // Trigger fade-out

    setTimeout(() => {
      ratesInfoPanel.classList.remove('fade-in');
      ratesInfoPanel.classList.add('hidden');
    }, 300); // Match the duration of your fade-out transition
  }
});
