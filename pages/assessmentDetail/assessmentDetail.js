import { ajax } from '../../utils/http'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  data: {
    detail: null
  },
  onLoad() {
    this.setData({ detail: wx.getStorageSync('currentAssessment') })
  },
  solve(e) {
    const index = e.currentTarget.dataset.index
    wx.navigateTo({ url: `../assessmentContent/assessmentContent?index=${index}`})
  },
  onUnload: function () {
    wx.removeStorageSync('currentAssessment')
  },
  submit() {
    const { params, id, type } = wx.getStorageSync('currentAssessment')
    params.forEach(item => {
      if (!item.urls.length) return Toast({ type: 'fail', context: this, message: '请完成所有内容处理' })
    })
    ajax('/v1/upload/assess', { params, id, type }).then(res => {
      console.log(res)
      Toast({ type: 'success', context: this, message: '提交成功' })
      wx.navigateTo({ url: '../assessmentList/assessmentList'})
    })
  }
})
