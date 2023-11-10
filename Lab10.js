mapboxgl.accessToken = 'pk.eyJ1IjoiZW5ld25hbSIsImEiOiJjbG9qNWFzOHowOGhzMmlxb2Ixa2U5Zjh0In0.YU05M2j4gqoBR8WGWhU-Mw';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/enewnam/clokf4a74005c01p984z91tz4', // style URL
  center: [-75.132807, 40.001066], // starting position [lng, lat]
  zoom: 10.2 // starting zoom
});

// add legend to your map
var layers = ['Commercial land', 'Residential land', 'Institutional land', 'Park/open space', 'Other'];
var colors = ['#ae16b6', '#52cbd1', '#c6cc0f', '#92d615', '#cd9418'];

  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

  var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }


  map.on('load', function() {
    map.getCanvas().style.cursor = 'default';
      
      // change info window on hover
      map.on('mousemove', function(e) {
        var states = map.queryRenderedFeatures(e.point, {
          layers: ['buildings-lu'] // get from the mapbox top left layer information
        });
        
        if (states.length > 0) {
          document.getElementById('pd').innerHTML =
            '<p><b>Building ID:</b> ' +
            states[0].properties.landuse +
            '</p>';
        } else {
          document.getElementById('pd').innerHTML =
            '<p>Mouse over each building from either map to see the building ID.</p>';
        }
      });
  });

    
// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({ color: 'maroon', rotation: 0 })
.setLngLat([-75.15212614897781, 39.980817789768274])
.setPopup(
  new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
      `<h3>${"Temple University"}</h3><p>${"Gladfelter Hall"}</p>`
    )
)
.addTo(map);

// Create a default Marker, colored black, rotated 0 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 0 })
.setLngLat([-75.20908872955793, 39.95124651050025])
.setPopup(
  new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
      `<h3>${"Home"}</h3><p>${"4244 Pine St."}</p>`
    )
)
.addTo(map);

map.on('load', () => {
  map.addSource('phillyparks', {
    type: 'geojson',
    data: 'PhillyPARKS2.geojson'
  });

  map.addLayer({
    'id': 'phillyparks-layer',
    'type': 'fill',
    'source': 'phillyparks',
    paint: {
    'fill-color': '#92d615', // fill color
    'fill-opacity': 0.7, // fill opacity
  }
  });
});

const mapclose = new mapboxgl.Map({
  container: 'mapclose', // container ID
  style: 'mapbox://styles/enewnam/clokf4a74005c01p984z91tz4', // style URL
  center: [-75.15212614897781, 39.980817789768274], // starting position [lng, lat]
  zoom: 15 // starting zoom
});

// Create a default Marker and add it to the map.
const marker3 = new mapboxgl.Marker({ color: 'maroon', rotation: 0 })
.setLngLat([-75.15212614897781, 39.980817789768274])
.setPopup(
  new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
      `<h3>${"Temple University"}</h3><p>${"Gladfelter Hall"}</p>`
    )
)
.addTo(mapclose);

mapclose.on('load', function() {
    mapclose.getCanvas().style.cursor = 'default';
      
      // change info window on hover
      mapclose.on('mousemove', function(e) {
        var states = mapclose.queryRenderedFeatures(e.point, {
          layers: ['buildings-lu'] // get from the mapbox top left layer information
        });
        
        if (states.length > 0) {
          document.getElementById('pd').innerHTML =
            '<p><b>Building ID:</b> ' +
            states[0].properties.landuse +
            '</p>';
        } else {
          document.getElementById('pd').innerHTML =
            '<p>Mouse over each building from either map to see the building ID.</p>';
        }
      });
  });
