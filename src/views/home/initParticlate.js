import { ref, onMounted, onBeforeUnmount, reactive } from 'vue'
import ParticlateImg from './ParticlateImg.js'
import targetImg from '/@img/headImg.png'
export default () => {
  const ParticlateWrapper = ref(null)
  let finishFlag = ref(false)
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
        callback: () => {
          finishFlag.value = true
        }
      })
    }
  })
  onBeforeUnmount(() => {
    ParticlateData.instance.dispose()
  })
  return {
    ParticlateWrapper,
    finishFlag
  }
}
