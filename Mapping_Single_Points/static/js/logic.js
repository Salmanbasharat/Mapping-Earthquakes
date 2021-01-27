
// Add console.log to check to see if our code is working.
console.log("working");


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
      40.7, -94.5
    ],
    zoom: 14
  });
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

L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: '#ffffa1',
    radius: 100
 }).addTo(map);

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