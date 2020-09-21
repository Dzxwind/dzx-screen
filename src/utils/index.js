import '/@modules/mapbox-gl/dist/mapbox-gl.css'
import '/@/assets/font/NotoSansCJK-Regular-1/NotoSansCJK-Regular-1.css'
import '../style/index.scss'

export default {
  install(app, options) {
    app.config.globalProperties.dsb = '大帅比'
  }
}