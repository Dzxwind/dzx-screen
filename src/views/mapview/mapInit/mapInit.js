import { onMounted, reactive } from 'vue'
import Mapbox from 'mapbox-gl'
import layers from './layers.js'
import sources from './sources.js'
Mapbox.accessToken = 'pk.eyJ1IjoiZHp4d2luZCIsImEiOiJjamp2NWE0Mm0xZHZ3M3FtaG9hMnVtemRjIn0.StSHDBIPo3am8o1x9rgk9Q'
let mb = {
  map: null,
  complete: false
}
const mapInit = () => {
  mb.map = new Mapbox.Map({
    container: 'mapView',
    center: [120.109726, 29.181806],
    antialias: true,
    zoom: 6,
    // style: 'mapbox://styles/mapbox/light-v10',
    style: {
      version: 8,
      name: 'basicLayer',
      sources: {
        ...sources
      },
      layers: [
        ...layers
      ]
    }
  })
}

const eventInit = () => {
  mb.map.on('mouseenter', 'polygonLayer', (e) => {
    mb.map.setPaintProperty('polygonLayer','fill-opacity',0.6)
    mb.map.getCanvas().style.cursor = 'pointer'
  })
  mb.map.on('mousemove', 'polygonLayer', (e) => {
    if (e.features.length > 0) {
      mb.map.setFilter('polygonHighLight', ['in', 'name', e.features[0].properties.name])
    }
  })
  mb.map.on('mouseleave', 'polygonLayer', (e) => {
    mb.map.getCanvas().style.cursor = 'auto'
    mb.map.setFilter('polygonHighLight', ['in', 'name', ''])
    mb.map.setPaintProperty('polygonLayer','fill-opacity', 0.3)
  })
  mb.map.on('click', e => {
    console.log(e);
  })
}

export default (callback) => {
  onMounted(() => {
    mapInit()
    mb.map.on('load', () => {
      mb.complete = true
      eventInit()
      mb.map.flyTo({
        pitch: 50,
        zoom: 7.2,
        center: [120.109726, 28.881806],
        speed: 0.3
      })
      callback(mb.map)
    })
  })
  return mb
}
