function updateWeather(lat, lon) {
  const apiKey = '7760198b35ded2181de9d3491bf6e93c';
  const weatherEl = document.getElementById('weather');

  // Fade out
  weatherEl.style.transition = 'opacity 0.3s ease';
  weatherEl.style.opacity = 0;

  // Wait for fade-out to complete
  setTimeout(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        const weatherDescription = data.weather[0].description;
        const temperature = Math.round(data.main.temp);
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const capitalizedDescription =
          weatherDescription.charAt(0).toUpperCase() +
          weatherDescription.slice(1);

        // Update content
        weatherEl.innerHTML = `
          <div class="weather-icon">
              <img src="${iconUrl}" alt="${capitalizedDescription}" />
          </div>
          <p class="weather-description">${capitalizedDescription}</p>
          <p class="temperature">${temperature}°C</p>
        `;

        // Force reflow before fade-in
        void weatherEl.offsetWidth;
        weatherEl.style.opacity = 1;
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        weatherEl.innerHTML = 'Unable to fetch weather data.';
        weatherEl.style.opacity = 1;
      });
  }, 200);
}
