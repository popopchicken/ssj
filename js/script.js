var cseList = [
  {"latlng":[32.8810,-117.2376],name:"Jesse","tag":"Quiz!"},
  {"latlng":[32.8812,-117.2374],name:"Sachi","tag":"Test Review!"},
  {"latlng":[32.8814,-117.2375],name:"Shaina","tag":"Assignment#3!"},
  {"latlng":[32.8812,-117.2373],name:"Vineet","tag":"Party!!"}
  ];

var eceList = [
  {"latlng":[32.8810,-117.2375],name:"Ella","tag":"Assignment#2!"},
  {"latlng":[32.8862,-117.2375],name:"Phuong","tag":"Project Stage3!"},
  {"latlng":[32.8814,-117.2475],name:"Raul","tag":"Lost and Sad!"},
  {"latlng":[32.8812,-117.2375],name:"Nick","tag":"Quiz Study"}
  ];
var cogsList = [
  {"latlng":[32.8811,-117.2400],name:"ScottyK","tag":"Assignment#6"},
  {"latlng":[32.8811,-117.2371],name:"Erica","tag":"Assignment#6"},
  {"latlng":[32.8812,-117.2374],name:"Alex","tag":"Assignment#6"},
  {"latlng":[32.8883,-117.2372],name:"Elena","tag":"Need Halp!"},
  {"latlng":[32.8815,-117.2370],name:"Annie"}
  ];

var infoWnd, mapCanvas;
var markers = [];
function initialize() {
  //Creates a map object.
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(-32.8812, 117.2375)
  };
  mapCanvas  = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
	filterCSE();  
}


function filterCSE(){

// Pruning
deleteMarkers();
$("#marker_list").empty();

  //Creates a infowindow object.
  infoWnd = new google.maps.InfoWindow();
  
  //Mapping markers on the map
  var bounds = new google.maps.LatLngBounds();
  var cse, i, latlng;
  for (i in cseList) {
    //Creates a marker
    cse = cseList[i];
    latlng = new google.maps.LatLng(cse.latlng[0], cse.latlng[1]);
    bounds.extend(latlng);


    var tag = ((cse.name).concat(": #")).concat(cse.tag);
    var marker = createMarker(
      mapCanvas, latlng, tag 
    );
    
    //Creates a sidebar button for the marker
    createMarkerButton(marker);
  }
  //Fits the map bounds
  mapCanvas.fitBounds(bounds);
}


function filterECE(){

// Pruning
deleteMarkers();
$("#marker_list").empty();
  //Creates a infowindow object.
  infoWnd = new google.maps.InfoWindow();
  
  //Mapping markers on the map
  var bounds = new google.maps.LatLngBounds();
  var ece, i, latlng;
  for (i in eceList) {
    //Creates a marker
    ece = eceList[i];
    latlng = new google.maps.LatLng(ece.latlng[0], ece.latlng[1]);
    bounds.extend(latlng);
    var tag = ((ece.name).concat(": #")).concat(ece.tag);
    var marker = createMarker(
      mapCanvas, latlng, tag 
    );
    
    //Creates a sidebar button for the marker
    createMarkerButton(marker);
  }
  //Fits the map bounds
  mapCanvas.fitBounds(bounds);

}

function filterCOGS(){
// Pruning
deleteMarkers();
$("#marker_list").empty();
  //Creates a infowindow object.
  infoWnd = new google.maps.InfoWindow();
  
  //Mapping markers on the map
  var bounds = new google.maps.LatLngBounds();
  var cogs, i, latlng;
  for (i in cogsList) {
    //Creates a marker
    cogs = cogsList[i];
    latlng = new google.maps.LatLng(cogs.latlng[0], cogs.latlng[1]);
    bounds.extend(latlng);


    var tag = ((cogs.name).concat(": #")).concat(cogs.tag);
    var marker = createMarker(
      mapCanvas, latlng, tag 
    );
    
    //Creates a sidebar button for the marker
    createMarkerButton(marker);
  }
  //Fits the map bounds
  mapCanvas.fitBounds(bounds);
}


function createMarker(map, latlng, title){
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
function createMarkerButton(marker){
  //Creates a sidebar button
  var ul = document.getElementById("marker_list");
  var li = document.createElement("li");
  var butt = document.createElement("button")
  var title = marker.getTitle();
  butt.innerHTML = title;
  li.appendChild(butt);
  ul.appendChild(li);

  markers.push(marker);


  //Trigger a click event to marker when the button is clicked.
  google.maps.event.addDomListener(li, "click", function(){
    google.maps.event.trigger(marker, "click");
  });
}


// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

google.maps.event.addDomListener(window, "load", initialize);

