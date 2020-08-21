module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        'Android >= 4.0',
        'iOS >= 7',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions', // 所有主流浏览器最近10版本用,
      ],
    },
    'postcss-pxtorem': {
      // 蓝湖上设计稿自定义为375px 测量值直接写入即可 若设计稿为750px 则rootValue: 32
      // 结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem,
      rootValue: 37.5, // vant-UI的官方根字体大小是37.5，即1rem = 37.5,大写PX不会被转化为px
      propList: ['*'], //假设需要仅对边框进行设置，可以写['*', '!border*']
      unitPrecision: 5, //保留rem小数点多少位
      //selectorBlackList: [".radius"], //则是一个对css选择器进行过滤的数组，里面有关.redius的类px的样式将不被转换，这里也支持正则写法。
      mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
      minPixelValue: 12, //px小于12的不会被转换
    },
  },
};
