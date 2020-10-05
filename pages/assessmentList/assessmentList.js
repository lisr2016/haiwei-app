import { ajax } from '../../utils/http'

Page({
  data: {
    list: [],
  },
  onLoad() {
    ajax('/v1/assess/list', null).then(list => {
      this.setData({ list })
    })
  },
  jump(e) {
    const index = e.currentTarget.dataset.index
    wx.setStorageSync('currentAssessment', this.data.list[index]);
    wx.navigateTo({ url: '../assessmentDetail/assessmentDetail'})
  },
})
