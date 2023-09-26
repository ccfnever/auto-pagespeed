export default [
  {
    // 输出的报告名称
    reportName: '海外twitch drops落地页二期 - PC',

    // pc 端测试地址
    url: [
      'https://test-zt.xoyo.games/snowbreak.amazingseasun.com/p/zt/2023/07/20/twitch-drops/index.html#/dashboard'
    ],

    // 测试工具，pagespeed 则使用 psi 测试
    tool: 'pagespeed',

    // 测试次数
    count: 10,

    // 单次测试后的间隔时间
    sleepTime: 2,

    // 模式
    strategy: 'desktop'
  },
  
  {
    // 输出的报告名称
    reportName: '海外twitch drops落地页二期 - 移动端',

    // pc 端测试地址
    url: [
      'https://test-zt.xoyo.games/snowbreak.amazingseasun.com/p/zt/2023/07/20/twitch-drops/index.html#/dashboard'
    ],

    // 测试工具，pagespeed 则使用 psi 测试
    tool: 'pagespeed',

    // 测试次数
    count: 10,

    // 单次测试后的间隔时间
    sleepTime: 2,

    // 模式
    strategy: 'mobile'
  },
]