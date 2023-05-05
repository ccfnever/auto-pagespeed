import fs from 'fs';
import dayjs from 'dayjs';
import xlsx from 'node-xlsx';

export default (xlsxData)=>{
  const fileName = `性能报告 - ${dayjs().format('YYYY-MM-DD HH:mm:ss')}.xlsx`
  fs.writeFileSync(`./out/${fileName}`,xlsx.build(xlsxData),"binary");
}
