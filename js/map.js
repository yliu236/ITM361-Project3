function initMap() {
  var fp = {lat: 41.881, lng: -87.623};

  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 12,
    center: fp});

  var marker = new google.maps.Marker({
    position: fp,
    map: map
  });
}

window.addEventListener('load', initMap );