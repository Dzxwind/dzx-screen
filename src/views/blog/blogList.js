import { reactive, readonly } from 'vue'
export default () => {
  const original = reactive([
    {
      name: 'mapbox-gl离线部署踩坑记 | 🏆 技术专题第三期征文',
      url: 'https://juejin.im/post/6867352613961728008',
      content: 'mapbox-gl可以说是gis可视化中的利器之一了。在这里记一次我第一次使用mapbox做项目的经历。 首先，先感谢猿基地提供的mapbox本地离线部署、及mapbox/node-fontnik工具使用介绍。 我作为一个菜鸡，站在巨人的肩膀上，做一个mapbox离线部署的整理…',
      tips: [
        '数据可视化',
        'GIS',
        '3D'
      ]
    },
    {
      name: 'CSS技巧：Flex弹性布局大型攻略',
      url: 'https://juejin.im/post/6844903725824213000',
      content: '在项目开发过程中，我们经常会遇到一些关于布局方面的问题。 一个好的布局能够让你在接下来的开发过程中事半功倍，甚至可以连带将响应式一并解决。 其中，父级盒子使用了灰色背景色，子级盒子使用了绿色为背景色，为方便看出边框，使用深绿色作为边框。实际布局我将使用.box和.box_i来实…',
      tips: [
        'css',
        '布局',
        'flex'
      ]
    },
  ])
  const blogList = readonly(original)
  const onBlogClick = (url) => {
    window.open(url)
  }
  return {
    blogList,
    onBlogClick
  }
}