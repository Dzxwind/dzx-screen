import request from '/@/utils/request.js'

export const getOverviewData = () => {
  return request({
    url: '/overview',
    method: 'post',
  })
}
