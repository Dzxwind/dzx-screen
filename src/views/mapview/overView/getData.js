import { ref, onMounted } from 'vue' 
import { getOverviewData } from '/@/api/overview.js'
export default () => {
  const overViewList = ref(null)
  const getData = async () => {
    const { data } = await getOverviewData()
    const overViewTemplate = [
      {
        name: '总人口数',
        key: 'member',
        unit: ''
      },
      {
        name: 'GDP',
        key: 'gdp',
        unit: ''
      },
      {
        name: '老龄率',
        key: 'age',
        unit: '%'
      }
    ]
    overViewList.value = overViewTemplate.map((item) => {
      return {
        ...item,
        value: parseFloat(data[item.key]).toLocaleString()
      }
    })
  }
  onMounted(() => {
    getData()
  })
  return { overViewList }
}