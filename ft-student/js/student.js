function get_time() {
    let time = document.getElementById('date').innerHTML = Date();

    return alert(`Happy Codind! It's on: ${time}`);
};
function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
    var x = document.getElementById("demo");