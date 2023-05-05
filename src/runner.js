import psi from 'psi';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async (config) => {
  const xlsxData = []

  for (const project of config) {
    const { reportName, url, tool, count, sleepTime, strategy } = project;
    const reportData = {
      name: reportName
    }

    // 测试地址遍历
    for (const target of url) {
      const caseData = [
        [
          '测试地址:', target
        ],
        [
          `Performance 总分`,
          `FCP/s`,
          `LCP/s`,
          `TBT/ms`,
          `CLS`,
          `SI/s`,
        ]
      ]

      // 整个用例测试次数
      for (let i = 0; i < count; i++) {
        let result;
        
        if (tool === 'pagespeed') {
          // 为避免缓存结果，需要再 url 上加上随机参数
          const newUrl = `${target}?aaa=${parseInt(Math.random() * 1000)}`
          console.log(`[${reportName}]：${newUrl} 开始第 ${i + 1} 次测试...`);
          result = await psi(newUrl, { strategy });
        } else {
          // 如果希望支持其他测试工具，可以在此添加条件分支
        }
        
        const score = result.data.lighthouseResult.categories.performance.score * 100;
        const audits = result.data.lighthouseResult.audits;
        const FCP = audits['first-contentful-paint'].displayValue
        const LCP = audits['largest-contentful-paint'].displayValue
        const TBT = audits['total-blocking-time'].displayValue
        const CLS = audits['cumulative-layout-shift'].displayValue
        // const FID = audits['first-contentful-paint'].displayValue
        const SI = audits['speed-index'].displayValue

        const performance = [
          score,
          FCP,
          LCP,
          TBT,
          CLS,
          // FID,
          SI
        ]

        caseData.push(performance.map(s=> s.toString().replace(/[\s|s|m]/g,'')));

        console.log(`等待 ${sleepTime} 秒后开始下一次测试...`);
        await sleep(sleepTime * 1000);
      }

      reportData.data = caseData;
      xlsxData.push(reportData)

      console.log(`[${reportName}] 测试完成，正在生成报告...`);
    }

  }
  
  return xlsxData;
}