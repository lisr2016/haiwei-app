import { ajax } from '../../utils/http'

Page({
  data: {
    active: 0,
    tabs: [
      { label: '日报', id: 0 },
      { label: '周报', id: 1 },
      { label: '月报', id: 2 },
    ],
  },
  onLoad: function (options) {
    if (options && options.type) {
      this.setData({ active: Number(options.type) })
      wx.setNavigationBarTitle({
        title: `生活垃圾-${ this.data.tabs[options.type].label }`
      })
      ajax(`/v1/message/${options.id}`, null).then(res => {
        console.log(res)
      })
    }
  },
  onChange(e) {
    this.setData({ active: e.detail.name })
    wx.setNavigationBarTitle({
      title: `生活垃圾-${ this.data.tabs[e.detail.name].label }`
    })
  }
})
