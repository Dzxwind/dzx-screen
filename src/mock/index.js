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
}