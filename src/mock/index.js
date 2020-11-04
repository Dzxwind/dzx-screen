import Mock from 'mockjs'
import area from './area/index.js'
import eg from './area/eg'
export default () => {
  Mock.mock('/area', 'post', (options) => {
    const { name, code } = JSON.parse(options.body)
    return {
      code: 200,
      data: {
        name,
        ...Mock.mock(eg)
        // ...area[code]
      }
    }
  })
  Mock.mock('/overview', 'post', () => {
    return {
      code: 200,
      data: Mock.mock({
        'member|1000000-8000000': 1,
        'gdp|100000000-800000000': 1,
        'age|0-20.1-10': 1,
      })
    }
  })
}