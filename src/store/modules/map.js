import Mapbox from 'mapbox-gl'
import layers from './layers.js'
import sources from './sources.js'

export default {
  state() {
    return {
      map: null,
    }
  },
  mutations: {
    mapInit(state) {
      state.map = new Mapbox.Map({
        container: 'mapView',
        center: [120.109726, 29.181806],
        zoom: 6,
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
      state.map.on('load', () => {
        this.commit('polygonHoverInit')
        state.map.flyTo({
          pitch: 50,
          zoom: 7.2,
          center: [120.109726, 28.881806],
          speed: 0.3
        })
      })
    },
    polygonHoverInit(state) {
      state.map.on('mouseenter', 'polygonLayer', (e) => {
        state.map.setPaintProperty('polygonLayer','fill-opacity',0.6)
        state.map.getCanvas().style.cursor = 'pointer'
      })
      state.map.on('mousemove', 'polygonLayer', (e) => {
        if (e.features.length > 0) {
          state.map.setFilter('polygonHighLight', ['in', 'name', e.features[0].properties.name])
        }
      })
      state.map.on('mouseleave', 'polygonLayer', (e) => {
        state.map.getCanvas().style.cursor = 'auto'
        state.map.setFilter('polygonHighLight', ['in', 'name', ''])
        state.map.setPaintProperty('polygonLayer','fill-opacity', 0.3)
      })
    }
  },
  actions: {

  }
}