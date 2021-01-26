
// Add console.log to check to see if our code is working.
// console.log("working");


// We create the tile layer that will be the background of our map.
var graymap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
    //   id: "mapbox/light-v10",
    id:"mapbox/dark-v10",
    accessToken: API_KEY
    }
  );

// Create the map object with a center and zoom level.
var map = L.map("mapid", {
    center: [
      37.6213, -122.3790
    ],
    zoom: 5
  });

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line colored.
L.polyline(line, {
  color: "yellow"
}).addTo(map);


  //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle on the map
// L.circle([34.0522, -118.2437], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,    
//     radius: 500
//  }).addTo(map);

// Using circleMarker function - pixel method

// L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     radius: 100
//  }).addTo(map);

// For Multiple markers - An array containing each city's location, state, and population.
// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
 });

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location).addTo(map);
// });

//  Loop through the cities array and create one marker for each city - ADD POP UP ON MARKERS WITH 000 SEPARATER

// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });

    //change the marker for each city to a circle that has a radius equivalent to the city's population.
    cityData.forEach(function(city) {
      console.log(city)
      L.circleMarker(city.location, {
         radius: city.population/100000
        })
      .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
    });


// Then we add our 'graymap' tile layer to the map.
graymap.addTo(map);



















// console.log("Step 1 working");

// // //  Add a marker to the map for Los Angeles, California.
// // let marker = L.marker([34.0522, -118.2437]).addTo(map);

// var graymap = L.tileLayer(
//   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
//   {
//     attribution:
//       "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/light-v10",
//     accessToken: API_KEY
//   }
// );

// // We create the map object with options.
// var map = L.map("mapid", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 3
// });

// // Then we add our 'graymap' tile layer to the map.
// graymap.addTo(map);