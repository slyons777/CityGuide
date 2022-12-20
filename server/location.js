function hello() {
    console.log("BOOGEY TIME");
}

let autocomplete;
let map;
let myLatlng = localStorage.getItem('loc');

function getWeather() {
    google.script.run.getLocation();
    fetch("/api/weather")
        .then((response) => response.json())
        .then((data) => {

            console.log("Weather Worked: ", data);
        })
        .catch(err => console.error('error', err));
}

if (!myLatlng) {
    myLatlng = { lat: 47.6062095, lng: -122.3320708 };
    localStorage.setItem('loc', JSON.stringify(myLatlng));
    storeLocation(myLatlng);
} else {
    myLatlng = localStorage.getItem('loc');
    myLatlng = JSON.parse(myLatlng);
    storeLocation(myLatlng);
}

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['(cities)'],
            componentRestricitons: { 'country': ['US'] },
            fields: ['place_id', 'geometry', 'name']
        });

    autocomplete.addListener("place_changed", onPlaceChanged);

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: myLatlng,
        gestureHandling: "cooperative",
    });
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,
    });

    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        var coords = JSON.stringify(mapsMouseEvent.latLng.toJSON());
        coords = JSON.parse(coords);
        jumpToLocation(coords["lat"], coords["lng"]);
        infoWindow.open(map);
    });
}

function onPlaceChanged() {
    let place = autocomplete.getPlace();

    if (!place.geometry) {
        // user did not select a prediction, then reset input field
        document.querySelector("#autocomplete").setAttribute("placeholder", "Enter a Place");
    } else {
        var lat_lng = JSON.stringify(place.geometry.location);
        lat_lng = JSON.parse(lat_lng);
        // Display location details about a valid place
        document.getElementById("details").innerHTML = `Name: ${place.name}  /  Location: ${lat_lng["lat"]}, ${lat_lng["lng"]}`;
        jumpToLocation(lat_lng["lat"], lat_lng["lng"]);
    }
}

function jumpToLocation(lat, lng) {
    var center = new google.maps.LatLng(lat, lng);
    map.panTo(center);

    myLatlng = {
        lat: lat,
        lng: lng
    };

    localStorage.setItem('loc', JSON.stringify(myLatlng));
    console.log("New Location: ", myLatlng);
}