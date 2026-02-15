async function getWeather() {
    const city = document.getElementById("city").value;

    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();

    document.getElementById("result").innerHTML =
        `Temperature: ${data.main?.temp} °F`;
}
