"use strict";

    // This example requires the Visualization library. Include the libraries=visualization
    // parameter when you first load the API. For example:
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
    let map, heatmap;

    console.log('Script2');
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {
        lat: 37.775,
        lng: -122.434
        },
        mapTypeId: "satellite"
    });
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
    }

    function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
    }

    function changeGradient() {
    const gradient = [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)"
    ];
    heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
    }

    function changeRadius() {
    heatmap.set("radius", heatmap.get("radius") ? null : 20);
    }

    function changeOpacity() {
    heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
    } // Heatmap data: 500 Points

    function getPoints() {
    console.log(getParameterByName("abc"));
        
var locations = [];


for (var i = 0; i < 3; i++) {
if(i==0)
            locations.push(new google.maps.LatLng(37.782551, -122.445368));
            else if(i==1)
            locations.push(new google.maps.LatLng(37.782745, -122.444586));
            else
            locations.push(new google.maps.LatLng(37.782842, -122.443688));
}
    
return locations;
}