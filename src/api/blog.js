// 掘金官方API，存在跨域问题
// 骚操作还是少搞一点为好。。
import request from '/@/utils/request.js'

export const getArticleDetail = (id) => {
  return request({
    url: 'https://apinew.juejin.im/content_api/v1/article/detail',
    method: 'post',
    data: {
      article_id: id
    }
  })
}

export const getArticleList = () => {
  return request({
    url: 'https://apinew.juejin.im/content_api/v1/article/query_list',
    method: 'post',
    data: {user_id: "2418581310817822", sort_type: 2, cursor: "0"}
  })
}
