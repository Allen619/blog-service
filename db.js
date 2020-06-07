const conn = require('./config');
const connection = conn();

let executeSql = (sql, modSqlParams = []) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, modSqlParams, (err, result) => {
      if (err) {
        console.log('错误信息-', err.sqlMessage);
        let errNews = err.sqlMessage;
        reject(errNews)
      }
      var string = JSON.stringify(result);
      var data = JSON.parse(string);
      resolve(data);
    })
  })
}

let resultData = async (sql, datas) => {
  let reslut
  let errInfo
  try {
    reslut = await executeSql(sql, datas)
  } catch (err) {
    errInfo = err
  }
  return new Promise((resolve, reject) => {
    if (reslut) resolve(reslut)
    if (errInfo) reject(errInfo)
  })
}

exports.resultData = resultData;