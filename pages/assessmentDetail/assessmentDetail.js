import { ajax } from '../../utils/http'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  data: {
    detail: null
  },
  onShow() {
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
    let on = true
    params.forEach(item => {
      if (!item.description) {
        Toast({ type: 'fail', context: this, message: '请完成所有内容处理' })
        on = false
      }
    })
    if (on) {
      ajax('/v1/upload/assess', { content: params, id, type }, 'post').then(res => {
        Toast({ type: 'success', context: this, message: '提交成功' })
        wx.navigateTo({ url: '../assessmentList/assessmentList'})
      })
    }
  }
})
