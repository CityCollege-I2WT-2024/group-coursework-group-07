//JavaScript Nightlife by Leandra Krasniqi

// MAP FUNCTIONALITY FOR BARS AND CLUBS

//This section of the code represents the creation of a map for my page: 
  // in each step I have explained what is happening based on a few tutorials I have followed.

document.addEventListener("DOMContentLoaded", function() {
  // This creates a "Leaflet" map centered at these specified coordinates, with a zoom level of 14 to fit all markings.
  var map = L.map('map').setView([40.63330067881516, 22.94675815907064], 14); 
  
  // Added a dark-themed tile layer from "CartoDB" to the map for dark mode
  var darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    // Attribution:
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  // Adding the dark layer to the map to match the dark aesthetic of the Bars/Clubs page
  darkLayer.addTo(map);

  // Custom icon for markers One and Two (bars and clubs), specifying the icon's image, size, and anchor points.
  var customIconOne = L.icon({
    iconUrl: '../../images/location-pin blue.png', 
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon which will correspond to the marker's location
    popupAnchor: [0, -32] // Position of the popup relative to the icon
  });

  // Creating a custom icon of a teal pin
  var customIconTwo = L.icon({
    iconUrl: '../../images/location-pin teal.png',
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon which will correspond to the marker's location
    popupAnchor: [0, -32] // Position of the popup relative to the icon
  });

  // This line initializes the MarkerCluster group ( for more readability of too many markers in one place )
  //Two marker cluster groups created, to seperately manage the bars and the clubs.
  var barCluster = L.markerClusterGroup();
  var clubCluster = L.markerClusterGroup();

  // This will create an empty LatLngBounds object.
  var bounds = L.latLngBounds();

  // Bars List of 9 bars:
  //Coordinates from Google Maps
  var bars = [
    //1
    { coords: [40.640701005103914, 22.959496676611195], name: "Le Coq tail mix bar" },
    //2
    { coords: [40.635525206423196, 22.93745317790916], name: "Wonderwall Fun Bar" },
    //3
    { coords: [40.62047094711885, 22.954340101215184], name: "Dentro sto Bar" },
    //4
    { coords: [40.62805602967212, 22.94888176029691], name: "The Hoppy Pub" },
    //5
    { coords: [40.63817559311796, 22.94230432264527], name: "Kafodeio Elliniko" },
    //6
    { coords: [40.63216929321347, 22.947958669412913], name: "The Pulp Bar" },
    //7
    { coords: [40.63910167590265, 22.938455352733538], name: "Rehab Pub" },
    //8
    { coords: [40.63759856582545, 22.938896566745154], name: "La Doze Bar" },
    //9
    { coords: [40.63731564761985, 22.937573567089856], name: "Gorilas" },
  ];

  // Clubs List of 6 clubs:
  //Coordinates from Google Maps
  var clubs = [
    //1
    { coords: [40.62754505468104, 22.949555482906344], name: "Partytura" },
    //2
    { coords: [40.636896464158, 22.93681361133943], name: "Tango Bar" },
    //3
    { coords: [40.63571918998945, 22.936745667565102], name: "Casper at Verykoko" },
    //4
    { coords: [40.6354954637441, 22.93660496081938], name: "Nhaos Nightclub" },
    //5
    { coords: [40.635653255413125, 22.93639846008388], name: "Eightball Club" },
    //6
    { coords: [40.63185814264354, 22.94191530537422], name: "Malt n' Jazz" },
  ];

  // Adding bars and clubs markers to the map:
  // Iterates over an array of bar objects, creating markers with custom icons and tooltips, adds them to the barCluster group, and updates the map bounds to include each bar's location
  bars.forEach(function (bar) {

    // Create a marker with the custom icon for bars
    var marker = L.marker(bar.coords, { icon: customIconOne });

    // Bind a tooltip with the bars name
    marker.bindTooltip(bar.name, { 
      permanent: true, // Tooltip shows only on hover
      direction: 'top', // Tooltip appears above the marker
      offset: [0, -10] // Adjust offset to position tooltip
    });

    barCluster.addLayer(marker); // Adding Bar clusters
    bounds.extend(bar.coords); // Extending bounds
  });

  // The same for the clubCluster group.
  clubs.forEach(function (club) {
    var marker = L.marker(club.coords, { icon: customIconTwo });
    marker.bindTooltip(club.name, { 
      permanent: true, // Tooltip shows only on hover
      direction: 'top', // Tooltip appears above the marker
      offset: [0, -10] }); // Adjust offset to position tooltip
    clubCluster.addLayer(marker);
  });

  // All the bar and club markers are clustered and added to the map
  map.addLayer(barCluster);
  map.addLayer(clubCluster);

});
