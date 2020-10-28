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
  let WeekStart = dayjs('2020-10-19');
  while(dayjs().isAfter(WeekStart)){
    let end = dayjs(WeekStart).add(6, 'day');
    result.push({
      timestamp: dayjs(WeekStart).valueOf(),
      start:`${dayjs(WeekStart).year()}年${dayjs(WeekStart).month() + 1}月${dayjs(WeekStart).date()}日`,
      end:`${dayjs(end).year()}年${dayjs(end).month() + 1}月${dayjs(end).date()}日`
    });
    WeekStart = dayjs(WeekStart).add(7, 'day');
    
  }
  return result;
}

module.exports = {
  formatTime,
  getWeeks
}
