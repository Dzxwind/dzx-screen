import { ref, onMounted, onBeforeUnmount, reactive } from 'vue'
import ParticlateImg from './ParticlateImg.js'
import targetImg from '/@img/headImg.jpg'
export default () => {
  const ParticlateWrapper = ref(null)
  const ParticlateData = reactive({
    instance: null
  })
  onMounted(() => {
    const logoImg = new Image()
    logoImg.src = targetImg
    logoImg.onload = () => {
      ParticlateData.instance = new ParticlateImg({
        img: logoImg,
        dom: ParticlateWrapper.value,
      })
      // ParticlateData.instance.draw()
    }
  })
  onBeforeUnmount(() => {
    ParticlateData.instance.dispose()
  })
  return {
    ParticlateWrapper
  }
}
