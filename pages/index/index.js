import { ajax } from '../../utils/http'
Page({
  data: {
    hasUserInfo: false,
    info: 1,
    movies: [
      {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600160596837&di=29400d565d240c627e7c43048bb0a7c1&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F28%2F90%2F5b7d5e5a6efa2_610.jpg'},
      {url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2142142353,1341383433&fm=26&gp=0.jpg'},
      {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600160520268&di=d25dc35f751f762da12878a6149ba995&imgtype=0&src=http%3A%2F%2Fwww.itmsc.cn%2Fuploads%2Fallimg%2F171125%2F112214D04_0.png'},
      {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600160701110&di=f75d9b16b73656f8f180b9f0b16ef85d&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F46%2F01%2F5bfcc8c6bef5c.jpg%2521%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue'},
    ],
    card: [],
  },
  onLoad: async function () {
    const user = wx.getStorageSync('user');
    wx.setNavigationBarTitle({ title: user.name })
    if (!user) {
      this.getUserInfo().then(res => {
        if (res && res.orgInfo) {
          wx.setStorageSync('user', { ...res.orgInfo, type: res.type });
          this.setData({ hasUserInfo: true })
          this.checkList(res.type)
          if (!res.orgInfo.initialized) {
            wx.navigateTo({ url: `/pages/perfect/perfect` })
          }
        }
      })
    } else {
      this.setData({ hasUserInfo: true })
      this.checkList(user.type)
    }
    console.log(user.type)
  },
  onShow() {
    if (this.data.hasUserInfo) {
      const user = wx.getStorageSync('user');
      if (!user.initialized) {
        wx.navigateTo({ url: `/pages/perfect/perfect` })
      }
    }
    ajax('/v1/message/list', null).then(res => {
      if (res) {
        const list = res.map(item => Object.assign({}, item))
        wx.setStorageSync('messageList', list)
        console.log(list)
        this.setData({
          info: list.filter(item => !item.isRead).length,
        })
        console.log(this.data.info)
      }
    })
  },
  checkList(type) {
    const card = [
      { label: '生活垃圾', url: '../lifeRubbish/lifeRubbish', icon: '/public/icons/domestic_waste.png', show: type !== '3' && type !== '4'},
      { label: '医疗垃圾', url: '../medicineRubbish/medicineRubbish', icon: '/public/icons/medic_waste2.png', show: type !== '2' && type !== '4'},
      { label: '考核评价', url: '../assessmentList/assessmentList', icon: 'exchange', show: type !== '4'},
      { label: '未读消息', url: '../message/message?type=1', icon: 'chat-o', show: type !== '4'},
      { label: '已读消息', url: '../message/message?type=0', icon: 'comment-o', show: type !== '4'},
      { label: '政策文件', url: '../policyList/policyList', icon: 'records', show: type !== '4'},
      { label: '考核指派', url: '../assessment/assessment', icon: 'manager-o', show: type === '4'},
      { label: '历史报告', url: '../historyReport/historyReport', icon: 'orders-o', show: type !== '4' },
    ].filter(item => item.show);
    this.setData({ card })
  },
  jump(e) {
    const { url } = e.currentTarget.dataset.currentdata;
    wx.navigateTo({ url })
  },
  getUserInfo() {
    return ajax('/v1/user/info', null)
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

  logout() {
    wx.clearStorageSync()
    wx.redirectTo({ url: '/pages/Login/Login' })
  }
})
