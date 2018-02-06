(function() {
    "use strict";

    var mapOptions = {
        // Set the zoom level
        zoom: 15,

        // This sets the center of the map at our location
        center: {
            lat:  29.426791,
            lng: -98.489602
        }
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var address = "13830 I-35, Live Oak, TX 78233";

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ "address": address }, function(results, status) {

        if(status === google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
        } else {
            alert("geocoding was not successful - STATUS: " + status);
        }
    });

    var roadhouse = {lat: 29.564615, lng: -98.335626};

    var marker = new google.maps.Marker({
        position: roadhouse,
        map: map,
        animation: google.maps.Animation.DROP,
        draggable: true,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    });



    var infowindow = new google.maps.InfoWindow({
        content: "<b>Texas Roadhouse</b><br> We just like to go here.<br>Oh, and the bread is really good."
    });

    marker.addListener("click", function () {
        infowindow.open( map, marker);
    });











})();

