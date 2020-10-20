import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const navInit = () => {
  const router = useRouter()
  const store = useStore()
  router.beforeEach((to, from, next) => {
    store.commit('switchMenu', to.name !== 'Home')
    next()
  })
  const list = router.getRoutes()
  const onNavItemClick = (name) => {
    router.push({
      name
    })
  }
  return {
    list,
    onNavItemClick
  }
}

export default navInit
