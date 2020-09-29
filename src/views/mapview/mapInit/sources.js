import geojsonData from '/@/assets/geojson/zhejiang.json';
export default {
  polygonSource: {
    type: 'geojson',
    data: geojsonData,
    generateId: true,
  },
  testSource: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.3062342036385, 29.901491942984833],
          },
        },
      ],
    },
  },
};
