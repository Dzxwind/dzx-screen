import request from '/@/utils/request.js'

export const getAreaData = ({ code, name }) => {
  return request({
    url: '/area',
    method: 'post',
    data: {
      code,
      name 
    }
  })
}
