'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})



/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! Attempting map now");
	var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


$('.f').click(happening);
function happening(event){
	event.preventDefault();
	$('.status').text($('.status').text());
}
