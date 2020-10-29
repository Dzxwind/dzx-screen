import echarts from '/@/utils/echarts/index.js'
import { ref, onMounted } from 'vue'
export default (data) => {
  const gdpArea = ref(null)
  onMounted(() => {
    const chart = echarts.init(gdpArea.value, 'default')
    const option = {
      color: ['#74b9ff'],
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
        bottom: 30,
        right: 10
      },
      xAxis: {
        type: 'category',
        axisLabel: {
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
          type: 'line',
          label: {
            show: false
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#74b9ff'
              }, {
                offset: 1, color: '#fff'
              }],
              global: false // 缺省为 false
            }
          },
          data: data.map(item => item.value)
        }
      ]
    }
    chart.setOption(option)
  })
  return {
    gdpArea
  }
}