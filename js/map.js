function initMap() {
    var fp = {lat: 41.881, lng: -87.623};
    var map = new google.maps.Map(document.getElementById('map'), {center: fp, zoom: 14});

    var infowindow = new google.maps.InfoWindow({
        content: 'Shedd Aquarium'
    });

    var marker = new google.maps.Marker({
        position: fp,
        map: map,
        icon: 'images/location.jpg'
    });
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}