// 配置
window.Config = {

  // 显示标题
  SiteName: 'Z-library可用站点站点监测',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm792930492-1480d6c0f09cfba2d506f75d',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '使用教程',
      url: 'https://mp.weixin.qq.com/s/eGEwPVTDE0oeQgHnVrfpgQ'
    },
    {
      text: '博客',
      url: 'https://blog.qikaile.tk'
    },
    {
      text: 'GitHub源码',
      url: 'https://github.com/Qinghe886/uptime-status'
    },
  ],
};
