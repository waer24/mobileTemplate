import axios from 'axois';
import { Toast, Toast } from 'vant';

axios.defaults.baseURL =
  process.env.NODE_ENV == 'development'
    ? '//api.newbee.ltd/api/v1'
    : '//api.newbee.ltd/api/v1';
axios.defaults.withCredentials = true; //需要携带证书
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['token'] = localStorage.getItem('token') || ''; // 通过token判断用户登录
axios.defaults.headers.post['Content-Type'] = 'application/json'; //发送json形式的数据包
axios.interceptors.response.use((res) => {
  // interceptors 拦截器，每个请求都会经过这个拦截器，返回的数据可以通过拦截处理后返回
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常啦~'); // vantUI的提示穿插进来
    return Promise.reject(res);
  }
  if (res.data.resultCode !== 200) {
    if (res.data.message) {
      Toast.fail(res.data.message);
    }
    if (res.data.resultCode == 416) {
      /* 返回 416 代表没有登录状态，路由跳转到/login 页面，这里的 window.vueRouter 是在
     main.js 里面设置好的 window.vueRouter = router */
      window.vueRouter.push({ path: '/login' });
    }
    return Promise.reject(res.data);
  }
  return res.data;
});

export default axios;
