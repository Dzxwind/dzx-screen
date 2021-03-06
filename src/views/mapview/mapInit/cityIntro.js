import RotatePin from '../threeModle/RotatePin.js'
import bbox from 'turf-bbox'
import { getAreaData } from '/@/api/area.js'
import { onMounted, ref } from 'vue'
export default (map, flag) => {
  const detailData = ref(null)
  const backOriginMap = () => {
    flag.value = false
    map.map.removeLayer('RotatePin')
    map.map.setFilter('polygonLayer')
    map.map.setFilter('polygonActive', ['in', 'adcode', ''])
    map.map.flyTo({
      pitch: 50,
      zoom: 7.2,
      center: [120.109726, 28.881806],
      speed: 0.5
    })
  }
  onMounted(() => {
    map.map.on('click', 'polygonLayer', async (e) => {
      const currentBounds = bbox(e.features[0].geometry)
      map.map.fitBounds([[currentBounds[0],currentBounds[1]],[currentBounds[2],[currentBounds[3]]]], {
        center: JSON.parse(e.features[0].properties.centroid),
        pitch: 40,
        speed: 0.5,
        padding: {
          top: 180,
          bottom: 180,
        },
        offset: [-380, 0]
      })
      map.map.setFilter('polygonLayer', ['in', 'adcode', e.features[0].properties.adcode])
      map.map.setFilter('polygonActive', ['in', 'adcode', e.features[0].properties.adcode])
      let RotatePinInstance = new RotatePin({
        id: 'RotatePin',
        center: JSON.parse(e.features[0].properties.center),
        height: 0,
        rotate: [Math.PI / 2, 0, 0],
        scale: 1.41843220338983e-5
      })
      map.map.addLayer(RotatePinInstance.getLayerObject())
      const data = await getAreaData({ code: e.features[0].properties.adcode,name: e.features[0].properties.name })
      detailData.value = data
      flag.value = true
    })
  })
  return {
    backOriginMap,
    detailData
  }
}
