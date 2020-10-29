import echarts from '/@/utils/echarts/index.js'
import { ref, onMounted } from 'vue'
export default (data) => {
  const originPie = ref(null)
  onMounted(() => {
    const chart = echarts.init(originPie.value, 'default')
    const option = {
      legend: {
        left: 'center',
        bottom: 0,
      },
      tooltip: {
        show: true
      },
      series: [
        {
          name: '人员来源分布',
          type: 'pie',
          center: ['50%', '45%'],
          radius: ['50%', '75%'],
          label: {
            show: false
          },
          data
        }
      ]
    }
    chart.setOption(option)
  })
  return {
    originPie
  }
}