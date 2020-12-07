import { ajax } from '../../utils/http'

Page({
  data: {
    tabs: [
      { label: '生活垃圾日报', id: '1' },
      { label: '生活垃圾周报', id: '2' },
      { label: '生活垃圾月报', id: '3' },
      { label: '医疗垃圾月报', id: '4' },
      { label: '桶前值守月报', id: '5' },
    ],
  },
  jump(e) {
    const type = e.currentTarget.dataset.type
    wx.navigateTo({ url: `/pages/reportList/reportList?type=${type}` })
  }
})
