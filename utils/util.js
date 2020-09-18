let dayjs = require('dayjs');

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('/')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getWeeks(){
  let result = [];
  let FridayStart = dayjs('2020-09-04');
  while(dayjs().isAfter(FridayStart)){
    let end = dayjs(FridayStart).add(6, 'day');
    result.push({
      timestamp: dayjs(FridayStart).unix(),
      start:`${dayjs(FridayStart).year()}年${dayjs(FridayStart).month() + 1}月${dayjs(FridayStart).date()}日`,
      end:`${dayjs(end).year()}年${dayjs(end).month() + 1}月${dayjs(end).date()}日`
    });
    FridayStart = dayjs(FridayStart).add(7, 'day');

  }
  return result;
}

module.exports = {
  formatTime,
  getWeeks
}
