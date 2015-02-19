var stationList = [
  {"latlng":[32.8810,-117.2375],name:"Jesse"},
  {"latlng":[32.8812,-117.2375],name:"Sachi"},
  {"latlng":[32.8814,-117.2375],name:"Shaina"},
  {"latlng":[32.8812,-117.2375],name:"Vineet"},
  {"latlng":[32.8812,-117.2375],name:"Alex"},
  ];

var List170 = [
  {"latlng":[32.8810,-117.2375],name:"Jesse"},
  {"latlng":[32.8812,-117.2375],name:"Sachi"},
  {"latlng":[32.8814,-117.2375],name:"Shaina"},
  {"latlng":[32.8812,-117.2375],name:"Vineet"},
  {"latlng":[32.8812,-117.2375],name:"Alex"},
  ];

var infoWnd, mapCanvas;
function initialize() {
  //Creates a map object.
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(32.8812, 117.2375)
  };
  mapCanvas  = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  //mapCanvas.setMapTypeId(google.maps.MapTypeId.ROADMAP);
  
  //Creates a infowindow object.
  infoWnd = new google.maps.InfoWindow();
  
  //Mapping markers on the map
  var bounds = new google.maps.LatLngBounds();
  var station, i, latlng;
  for (i in stationList) {
    //Creates a marker
    station = stationList[i];
    latlng = new google.maps.LatLng(station.latlng[0], station.latlng[1]);
    bounds.extend(latlng);
    var marker = createMarker(
      mapCanvas, latlng, station.name
    );
    
    //Creates a sidebar button for the marker
    createMarkerButton(marker);
  }
  //Fits the map bounds
  mapCanvas.fitBounds(bounds);
}
function createMarker(map, latlng, title) {
  //Creates a marker
  var marker = new google.maps.Marker({
    position : latlng,
    map : map,
    title : title 
  });
  
  //The infoWindow is opened when the sidebar button is clicked
  google.maps.event.addListener(marker, "click", function(){
    infoWnd.setContent("<strong>" + title + "</title>");
    infoWnd.open(map, marker);
  });
  return marker;
}
function createMarkerButton(marker) {
  //Creates a sidebar button
  var ul = document.getElementById("marker_list");
  var li = document.createElement("li");
  var butt = document.createElement("button")
  var title = marker.getTitle();
  butt.innerHTML = title;
  li.appendChild(butt);
  ul.appendChild(li);
  //Trigger a click event to marker when the button is clicked.
  google.maps.event.addDomListener(li, "click", function(){
    google.maps.event.trigger(marker, "click");
  });
}
google.maps.event.addDomListener(window, "load", initialize);

