import runner from './runner.js';
import config from '../config.js';
import exportXlsx from './export.js'


(async () => {
  const data = await runner(config);
  exportXlsx(data)
})()

