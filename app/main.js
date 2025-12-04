import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ImageLayer from 'ol/layer/Image.js';
import ImageWMS from 'ol/source/ImageWMS.js';


const couche_osm =
  new TileLayer({
    source: new OSM(),
  });

const source_dealsbycountry =
  new ImageWMS({
      url: 'http://localhost:8080/geoserver/land_matrix/wms',
      params: {'LAYERS':'land_matrix:deals_by_country'},
      serverType: 'geoserver',
  });

const couche_dealsbycountry =
  new ImageLayer({
    source : source_dealsbycountry,
  });

const map = new Map({
  target: 'map',
  layers: [couche_osm, couche_dealsbycountry],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});