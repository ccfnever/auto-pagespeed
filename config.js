export default [
  {
    // 输出的报告名称
    reportName: 'tgame 预约站性能测试 PC',

    // pc 端测试地址
    url: [
      'https://snowbreak.amazingseasun.com/en/index.html'
    ],

    // 测试工具，pagespeed 则使用 psi 测试
    tool: 'pagespeed',

    // 测试次数
    count: 5,

    // 单次测试后的间隔时间
    sleepTime: 10,

    // 模式
    strategy: 'desktop'
  },
  
  {
    // 输出的报告名称
    reportName: 'tgame 预约站性能测试 移动端',

    // pc 端测试地址
    url: [
      'https://snowbreak.amazingseasun.com/en/index.html'
    ],

    // 测试工具，pagespeed 则使用 psi 测试
    tool: 'pagespeed',

    // 测试次数
    count: 5,

    // 单次测试后的间隔时间
    sleepTime: 10,

    // 模式
    strategy: 'mobile'
  },
]