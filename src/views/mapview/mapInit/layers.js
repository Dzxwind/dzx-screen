export default [
  {
    id: 'polygonLayer',
    type: 'fill',
    source: 'polygonSource',
    paint: {
      'fill-color': '#ffffff',
      'fill-opacity': 0.3,
      // 'fill-color': [
      //   'match',
      //   ['feature-state', 'currentState'],
      //   'highlight', '#00cccc',
      //   '#ffffff'
      // ],
      // 'fill-opacity': [
      //   'match',
      //   ['feature-state', 'currentState'],
      //   'highlight', 0.4,
      //   0.6
      // ],
      'fill-outline-color': '#999'
    },
    layout: {}
  },
  {
    id: 'polygonHighLight',
    type: 'fill',
    source: 'polygonSource',
    filter: ['in', 'name', ''],
    paint: {
      'fill-color': '#00d2d3',
      'fill-opacity': 0.3,
      'fill-outline-color': '#0fe5e8'
    }
  },
  {
    id: 'testPoint',
    type: "symbol",
    source: 'testSource',
    layout: {
      'icon-image': '/@/assets/images/headImg.png'
    }
  }
]
