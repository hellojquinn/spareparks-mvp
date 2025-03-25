const latitude = -33.8765;
const longitude = 151.20269;

const apiKey = '7760198b35ded2181de9d3491bf6e93c';

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const weatherDescription = data.weather[0].description;
    const temperature = Math.round(data.main.temp);
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    const capitalizedDescription =
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

    document.getElementById('weather').innerHTML = `
            <div class="weather-icon">
                <img src="${iconUrl}" alt="${capitalizedDescription}" />
            </div>
            <p class="weather-description">${capitalizedDescription}</p>
            <p class="temperature">${temperature}°C</p>
        `;
  })
  .catch((error) => {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather').innerHTML =
      'Unable to fetch weather data.';
  });
