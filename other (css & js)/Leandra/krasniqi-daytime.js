//JavaScript Daytime by Leandra Krasniqi

// MAP FUNCTIONALITY FOR CAFES

//This section of the code represents the creation of a map for my page: 
  // in each step I have explained what is happening based on a few tutorials I have followed.

document.addEventListener("DOMContentLoaded", function() {
  // This creates a "Leaflet" map centered at these specified coordinates, with a zoom level of 14.5 to fit all markings.
  var map = L.map('map').setView([40.63223702124965, 22.94658830748815], 14.5); 
  
  // Added a light-themed tile layer from "CartoDB" to the map for light mode.
  var lightLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    // Attribution:
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
    
  // Adding the light layer to the map to match the light aesthetic of the Cafes page
  lightLayer.addTo(map);

  // This line initializes the MarkerCluster group ( for more readability of too many markers in one place )
  var markers = L.markerClusterGroup();

  //Cafe List of 20 cafes:
  //Coordinates from Google Maps
  var cafes = [
    //1 
    { coords: [40.62983506908305, 22.944987144646177], name: "Albeta Bakery" },
    //2 
    { coords: [40.63780826478377, 22.941497018390166], name: "The Caravan Cafe" },
    //3 
    { coords: [40.63030507911399, 22.94472021018435], name: "Koukos"  },
    //4 
    { coords: [40.63440818466753, 22.94089053970368], name: "Menta Cafe Bar" },
    //5 
    { coords: [40.63148784044935, 22.945883338729427], name: "Valenio" },
    //6 
    { coords: [40.631554185533744, 22.947363149295168], name: "Spoon Thessaloniki" },
    //7 
    { coords: [40.63109106829672, 22.9465541997144528], name: "Le Jardin Extraordinaire Café" },
    //8 
    { coords: [40.63573312109363, 22.93600516872407], name: "The Blue Cup" },
    //9 
    { coords: [40.62731205181451, 22.94911479055613], name: "Palermo" },
    //10 
    { coords: [40.63515474181223, 22.939307676829262], name: "The Garden Bar" },
    //11
    { coords: [40.62621811208562, 22.95454447310629], name: "SKYLINE - OTE Tower" },
    //12 
    { coords: [40.634806283710475, 22.94834415550808], name: "La Nina Frida" },
    //13 
    { coords: [40.631102873279254, 22.94212198667411], name: "Tribeca" },
    //14 
    { coords: [40.63634631234965, 22.93810940222547], name: "Ypsilon" },
    //15 
    { coords: [40.635192967236286, 22.94839075710659], name: "shed 小屋 Specialty Coffee Shop" },
    //16 
    { coords: [40.63481541629573, 22.937417514777444], name: "Lena's Bistro" },
    //17 
    { coords: [40.637059216843035, 22.952922957106598], name: "CANELA Coffeshop" },
    //18 
    { coords: [40.63188464675481, 22.94285352642321], name: "Noon Cafe" },
    //19 
    { coords: [40.63172180234612, 22.94665153416336], name: "Mandarini SKG" },
    //20
    { coords: [40.63511609999999, 22.949316984094057], name: "NAKED Specialty Coffee and Brunch" },
  ];
   
  // Creating a custom icon of a green pin
  var customIconThree = L.icon({
    iconUrl: '../../images/location-pin green.png', 
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon which will correspond to the marker's location
    popupAnchor: [0, -32] // Position of the popup relative to the icon
  });

  // Add markers
  cafes.forEach(function(cafe) {

    // Create a marker with the custom icon
    var marker = L.marker(cafe.coords, { icon: customIconThree });
    
    // Bind a tooltip with the cafés name
    marker.bindTooltip(cafe.name, {
      permanent: true, // Tooltip shows only on hover
      direction: 'top', // Tooltip appears above the marker
      offset: [0, -10], // Adjust offset to position tooltip
    });
    
    // Add the marker to the layer group
    markers.addLayer(marker);
  });
  
  // Adding cluster of Cafes' group to the map
  map.addLayer(markers);

});