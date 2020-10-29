import echarts from '/@/utils/echarts/index.js'
import { ref, onMounted } from 'vue'
export default (data) => {
  const ageBar = ref(null)
  onMounted(() => {
    const chart = echarts.init(ageBar.value, 'default')
    const option = {
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        }
      },
      grid: {
        top: 40,
        left: 40,
        bottom: 50
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          rotate: 30,
          margin: 14
        },
        data: data.map(item => item.name)
      },
      yAxis: {
        name: '(万人)',
        show: true,
        type: 'value',
        axisLabel: {
          formatter(params) {
            console.log(params);
            return `${params / 10000}`
          }
        }
      },
      series: [
        {
          name: '人员年龄分布',
          type: 'bar',
          label: {
            show: false
          },
          data: data.map(item => item.value)
        }
      ]
    }
    chart.setOption(option)
  })
  return {
    ageBar
  }
}