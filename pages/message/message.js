import { ajax } from '../../utils/http'

Page({
  data: {
    list: [],
  },
  onLoad(options) {
    if (options && options.type) {
      const arr = ['已读', '未读']
      wx.setNavigationBarTitle({
        title: `${arr[options.type]}消息`,
      })
      const isRead = options.type === '0'
      ajax('/v1/message/list', null).then(res => {
        const list = res.map(item => Object.assign({}, item, { time: this.formatUTC(item.createTime) }))
        wx.setStorageSync('messageList', list)
        this.setData({
          list: list.filter(item => item.isRead === isRead),
        })
      })
    }
  },
  jump(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `../messageDetail/messageDetail?id=${id}`})
  },
  formatUTC(utc_datetime) {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utc_datetime.indexOf('T')
    var Z_pos = utc_datetime.indexOf('Z')
    var year_month_day = utc_datetime.substr(0, T_pos)
    var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1)
    var new_datetime = year_month_day + ' ' + hour_minute_second // 2017-03-31 08:02:06

    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime))
    timestamp = timestamp.getTime()
    timestamp = timestamp / 1000

    // 增加8个小时，北京时间比utc时间多八个时区
    var timestamp = timestamp + 8 * 60 * 60

    // 时间戳转为时间
    return new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ')
  },
})
