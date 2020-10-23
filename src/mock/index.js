import Mock from 'mockjs'
import area from './area/index.js'
export default () => {
  Mock.mock('/area', 'post', (options) => {
    console.log(options);
    return {
      code: 200,
      data: area[JSON.parse(options.body).area]
    }
  })
}