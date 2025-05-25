async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "fe26a9a14a1b476cb2871457252505"; 
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    document.getElementById("weatherResult").innerHTML = `
      <p>Temperature: ${temp}°C</p>
      <p>Condition: ${condition}</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerText = "Error fetching weather.";
  }
}
