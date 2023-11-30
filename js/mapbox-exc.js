//this is the map
mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-77.9928, 35.3849], // starting position [lng, lat]
    zoom: 11, // starting zoom
});

//Adds the zoom control to the map
map.addControl(new mapboxgl.NavigationControl());

// Places the original location and marker
geocode("808 N Berkley Blvd Unit J Goldsboro North Carolina 27534", MB_KEY).then(coords => {
    const marker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map);

    const mezcalitoPopup = new mapboxgl.Popup()
        .setHTML("<p>Mezcalito!</p>");

    marker.setPopup(mezcalitoPopup);
});

// Array of objects with restaurants
const restaurant = [{
    name: "Chick-fil-a",
    location: "1201 N Berkley Blvd Goldsboro North Carolina 27534"
},
    {
        name: "Texas Road House",
        location: "600 N Berkley Blvd Goldsboro North Carolina 27534"
    }];
// Function below to set the other two locations and add makers to them
restaurant.forEach(rest => {
    geocode(rest.location, MB_KEY).then(coords => {
        const marker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        const restaurantPopup = new mapboxgl.Popup()
            .setHTML(`<p>${rest.name}</p>`);
        marker.setPopup(restaurantPopup);
    });
});
// Event Listener for the select zoom option
document.getElementById('zoom-level').addEventListener('change', function(event){
    const zoomLevel = parseFloat(event.target.value); // Had to use parse cause it wouldnt work without it
    map.setZoom(zoomLevel);
});

// For the user to search an address and place a marker
document.getElementById('submit-address').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    geocode(userInput, MB_KEY).then(function(result) {
        map.flyTo({
            center: result,
            essential: true
        });
        // Part of the function that adds the marker
        new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map);
        //catching if the geocode cannot obtain the address and asking for the user to try again
    }).catch(function(error) {
        console.error(error);
        alert('Unable to obtain address. Please try again.');
    });
});