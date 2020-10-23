import RotatePin from '../threeModle/RotatePin.js'
import bbox from 'turf-bbox'
import { getAreaData } from '/@/api/area.js'
export default (map) => {
  map.on('click', 'polygonLayer', async (e) => {
    const currentBounds = bbox(e.features[0].geometry)
    console.log(e.features[0]);
    map.fitBounds([[currentBounds[0],currentBounds[1]],[currentBounds[2],[currentBounds[3]]]], {
      center: JSON.parse(e.features[0].properties.centroid),
      pitch: 30,
      speed: 0.3,
      padding: {
        top: 180,
        bottom: 180,
      },
      offset: [-380, 0]
    })
    map.setFilter('polygonLayer', ['in', 'adcode', e.features[0].properties.adcode])
    map.setFilter('polygonActive', ['in', 'adcode', e.features[0].properties.adcode])
    let RotatePinInstance = new RotatePin({
      id: 'RotatePin',
      center: JSON.parse(e.features[0].properties.center),
      height: 0,
      rotate: [Math.PI / 2, 0, 0],
      scale: 1.41843220338983e-5
    })
    map.addLayer(RotatePinInstance.getLayerObject())
    const data = await getAreaData(e.features[0].properties.adcode)
    console.log(data);
  })
  map.on('dblclick', (e) => {
    map.removeLayer('RotatePin')
    map.setFilter('polygonLayer')
    map.setFilter('polygonActive', ['in', 'adcode', ''])
    map.flyTo({
      pitch: 50,
      zoom: 7.2,
      center: [120.109726, 28.881806],
      speed: 0.3
    })
  })
}