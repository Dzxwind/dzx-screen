import axios from 'axios';

// 开发环境下的基础URL修改
// const baseURL = process.env.NODE_ENV == "development" ? "/api" : ipaddress;

var instance = axios.create();

instance.defaults.timeout = 10000;
instance.all = axios.all;
instance.spread = axios.spread;

instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method === 'get') {
    if (!config.params) {
      config.params = {};
    }
  } else if (config.method === 'post') {
    if (!config.data) {
      config.data = {};
    }
    // config.data = qs.stringify(config.data); // 将post请求的参数序列化
  }
  config.url = encodeURI(config.url);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status === 200) {

  }
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  if (error.response) {
    
  }
  return Promise.reject(error);
});

export default instance;