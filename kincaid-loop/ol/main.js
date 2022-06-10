import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat, toLonLat} from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';


// set baselayer to OSM Humanitarian
const base = new OSM();
base.setUrl('https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png');

// add and style roads layer
const roadSource = new VectorSource({
  format: new GeoJSON(),
  url: './data/kincaid-roads.geojson',
})
const roads = new VectorLayer({
  source: roadSource,
})

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: base,
    }),
  ],
  view: new View({
    center: fromLonLat([-82.298918, 29.631263]),
    zoom: 14
  })
});

map.addLayer(roads);