export default [
  {
    // 输出的报告名称
    reportName: 'xxxx 性能测试 PC',

    // pc 端测试地址
    url: [
      'https://www.bilibili.com'
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
  
  
]