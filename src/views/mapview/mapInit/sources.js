import geojsonData from '/@/assets/geojson/zhejiang.json';
export default {
  polygonSource: {
    type: 'geojson',
    data: geojsonData,
    generateId: true,
  },
};
