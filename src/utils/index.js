import '/@modules/mapbox-gl/dist/mapbox-gl.css'
import '/@/assets/font/NotoSansCJK-Regular-1/NotoSansCJK-Regular-1.css'
import '/@/assets/font/LED/LED.css'
import '../style/index.scss'
import IconFont from '/@/components/IconFont.vue'

export default {
  install(app, options) {
    app.config.globalProperties.dsb = '大帅比'
    app.component('icon-font', IconFont)
  }
}