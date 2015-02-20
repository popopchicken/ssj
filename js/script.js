var cseList = [
  {"latlng":[32.8810,-117.2376],name:"Jesse","tag":"Quiz!"},
  {"latlng":[32.8812,-117.2374],name:"Sachi","tag":"Test Review!"},
  {"latlng":[32.8814,-117.2375],name:"Shaina","tag":"Assignment#3!"},
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
  {"latlng":[32.8815,-117.2370],name:"Annie","tag":"Don't Help Elena"}
  ];
var geisel = new google.maps.LatLng(32.8812,-117.2377);
var chicago = new google.maps.LatLng(41.85, -87.65);
var infoWnd, map;
var markers = [];
var selfMarkers =[];

/** @constructor */
function CenterControl(controlDiv, map) {

  // Set CSS for the control border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Center Map';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // Chicago
  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(chicago)
  });

}


function makeVisible(){
//$(this).find(".hidden").css("visibility","visible");
    document.getElementById("hiddenObj").style.display = "block";
}
function makeInvisible(){}

/* INITIALIZE FUNCTION
 *
 * Initializes map and sets markers, as well as animations.
 *
 */

function initialize() {
  //Creates a map object.
  var mapOptions = {
       panControl: false,
       mapTypeId: google.maps.MapTypeId.SATELLITE,
       zoom: 4,
       center: geisel
  };

  map  = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
	filterCSE();
    var myIcon = new google.maps.MarkerImage("img/customBlue.png", null, null, null, new google.maps.Size(30,40));
    var image = 'img/redpin.png';
    var marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: geisel,
    title:"Vineet:#PartywithTa's",
    icon:myIcon
  });


 var contentString = "Set Location by dragging!"

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });



    infowindow.open(map,marker);
 setTimeout(function(){
    infowindow.close(map,marker);
   // document.getElementById('wrapper').style.display = "block";
},4000);



    // Calculates and sets center when window size changes
var center=map.getCenter();
function calculateCenter() {
  center = map.getCenter();
}
google.maps.event.addDomListener(map, 'idle', function() {
  calculateCenter();
});


google.maps.event.addDomListener(window, 'resize', function() {
  map.setCenter(center);
});
  //google.maps.event.addListener(marker, 'click', toggleBounce);
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function() {
        marker.setAnimation(null)
    }, 3000);




  // Div for StreetMap View
  //
  /*
 var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv);

*/

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
      map, latlng, tag
    );

    //Creates a sidebar button for the marker
    createMarkerButton(marker);
  }
  //Fits the map bounds
  map.fitBounds(bounds);
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
      map, latlng, tag
    );
    marker.set("color","#000000");
    //Creates a sidebar button for the marker
    createMarkerButton(marker);
  }
  //Fits the map bounds
  map.fitBounds(bounds);

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
      map, latlng, tag
    );

    //Creates a sidebar button for the marker
    createMarkerButton(marker);
  }
  //Fits the map bounds
  map.fitBounds(bounds);
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
// Define a property to hold the center state
CenterControl.prototype.center_ = null;

// Define setters and getters for this property
CenterControl.prototype.getCenter = function() {
  return this.center_;
}

CenterControl.prototype.setCenter = function(center) {
  this.center_ = center;
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



function markSelf(){
window.alert("Message Sent!");
    setTimeout(function(){
window.alert("You received a message from: Scott.\nCheck your Messages!");
   // document.getElementById('wrapper').style.display = "block";
},5000);
/*
var box = prompt("Please enter your name", "Harry Potter");

    if (box != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }


  var marker = new google.maps.Marker({
    position : chicago,
    map : map,
    title : "It's a me, Mario!"
});
    */
}



function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


/*
function textBox(){
var box = prompt("Please enter your name", "Harry Potter");

    if (box != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}*/
google.maps.event.addDomListener(window, "load", initialize);

