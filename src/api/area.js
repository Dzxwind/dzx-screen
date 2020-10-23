import request from '/@/utils/request.js'

export const getAreaData = (area) => {
  return request({
    url: '/area',
    method: 'post',
    data: {
      area 
    }
  })
}
