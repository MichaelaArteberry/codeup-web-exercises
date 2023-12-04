"use strict";
//Pulls the map
mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-77.9928, 35.3849], // starting position [lng, lat]
    zoom: 11, // starting zoom
});

//Adds the zoom control to the map
map.addControl(new mapboxgl.NavigationControl());

// Event Listener for the select zoom option
document.getElementById('zoom-level').addEventListener('change', function (event) {
    const zoomLevel = parseFloat(event.target.value);
    map.setZoom(zoomLevel);
});

//Pulling the weather data from the API
fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${WeatherMap_KEY}&units=imperial`)
    .then(data => console.log(data));

// Places the original location and marker
let marker = new mapboxgl.Marker({
    draggable: true
}).setLngLat([-77.9928, 35.3849])
    .addTo(map);

// Create the forecast cards for the original location, calling the createForecastCards function
createForecastCards(marker.getLngLat());

// When the marker is dragged, update the weather data
marker.on('dragend', function () {
    let lngLat = marker.getLngLat();
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WeatherMap_KEY}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            // Process the weather data here
            console.log(data);
            createForecastCards(lngLat);
        })
        .catch(error => console.error('Error:', error));
});

// For the user to search an address and place a marker
document.getElementById('searchButton').addEventListener('click', function () {
    const userInput = document.getElementById('search').value;
    geocode(userInput, MB_KEY).then(function (result) {
        map.flyTo({ //Moves the center of the map to markers new location
            center: result,
            essential: true
        });
        marker.setLngLat(result);

//Catching the error if the user inputs an invalid address
    }).catch(function (error) {
        console.error(error);
        alert('Unable to obtain address. Please try again.');
    });
});

// Create cards for the forecast based on the location of the marker
function createForecastCards(lngLat) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WeatherMap_KEY}&units=imperial`)
        .then(data => data.json())
        .then(forecast => {
// Create HTML structure for the forecast
            let forecastHTML = '';
            for (let i = 0; i < forecast.list.length; i += 8) {
                const day = forecast.list[i];
                const date = new Date(day.dt * 1000).toDateString();
                const addIcon = day.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${addIcon}@2x.png`; // Pulled this link from the open weather map api
                forecastHTML += `
                    <div class="forecast-card">
                        <h3>${date}</h3>
                        <img src=${iconUrl} alt=${day.weather[0].description} />
                        <p>Temperature: ${day.main.temp}°F</p>
                        <p>Humidity: ${day.main.humidity}%</p>
                        <p>${day.weather[0].description}</p>
                    </div>
                `;
            }
// Add the forecast cards to the page
            document.getElementById('weatherInfoCard').innerHTML = forecastHTML;
        });
}

