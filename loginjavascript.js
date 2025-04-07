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

//Email JS Code:

// === EmailJS Login Code Logic ===

let generatedCode = '';
let codeExpiryTime = null;
let resendCooldown = false;
let resendTimer = null;

document.getElementById('send-code-btn').addEventListener('click', function () {
  const email = document.getElementById('email').value.trim();
  const sendBtn = document.getElementById('send-code-btn');

  if (!email) {
    alert('Please enter your email.');
    return;
  }

  if (resendCooldown) {
    alert('Please wait before resending the code.');
    return;
  }

  // Prevent immediate action, allowing pressing effect
  sendBtn.classList.add('active');
  setTimeout(function () {
    sendBtn.classList.remove('active'); // Remove active class after effect is shown
  }, 500); // Adjust this time for how long you want the effect to last

  // Disable button to prevent spamming
  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending...';

  // Generate a random 4-digit code
  generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
  codeExpiryTime = Date.now() + 5 * 60 * 1000; // 5 minutes from now

  // Show input + verify button
  document.getElementById('code-input-group').style.display = 'block';
  document.getElementById('verify-btn').style.display = 'inline-block';

  // Send code via EmailJS
  emailjs
    .send('service_aoyzwuq', 'template_9uwhvxm', {
      to_email: email,
      code: generatedCode,
    })
    .then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
        const statusMessage = document.getElementById('email-status-message');
        statusMessage.style.display = 'block';

        // Adjust the resend button width
        sendBtn.classList.add('resend'); // Apply the "resend" class to reduce width
        sendBtn.textContent = 'Resend Code';

        startResendCooldown(); // Start cooldown after success
        startCodeExpiryTimer(); // Start the countdown timer
      },
      function (error) {
        console.log('FAILED...', error);
        alert('Failed to send email. Please try again.');
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send Code';
      }
    );
});

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const userCode = document.getElementById('code').value.trim();

  // Check if code has expired
  if (!codeExpiryTime || Date.now() > codeExpiryTime) {
    alert('The code has expired. Please request a new one.');
    return;
  }

  if (userCode === generatedCode.toString()) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    alert('Incorrect code. Please try again.');
  }
});

function startResendCooldown() {
  const sendBtn = document.getElementById('send-code-btn');
  resendCooldown = true;
  sendBtn.disabled = true;

  let countdown = 30;
  sendBtn.textContent = `Send Again? Wait ${countdown}s`;

  resendTimer = setInterval(() => {
    countdown--;
    sendBtn.textContent = `Send Again? Wait ${countdown}s`;

    if (countdown <= 0) {
      clearInterval(resendTimer);
      resendCooldown = false;
      sendBtn.disabled = false;
      sendBtn.textContent = 'Resend Code';
    }
  }, 1000);
}

function startCodeExpiryTimer() {
  const countdownDisplay = document.getElementById('countdown-timer');
  const timerContainer = document.getElementById('code-expiry-timer');

  const updateTimer = () => {
    const remainingTime = codeExpiryTime - Date.now();

    if (remainingTime <= 0) {
      clearInterval(expiryTimer);
      countdownDisplay.textContent = '00:00';
      timerContainer.style.display = 'none'; // Hide timer when expired
      return;
    }

    const minutes = Math.floor(remainingTime / 60000); // Minutes
    const seconds = Math.floor((remainingTime % 60000) / 1000); // Seconds
    countdownDisplay.textContent = `${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`;

    timerContainer.style.display = 'block'; // Show timer
  };

  // Update every second
  const expiryTimer = setInterval(updateTimer, 1000);
  updateTimer(); // Initial update
}
