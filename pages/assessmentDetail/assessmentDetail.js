Page({
  data: {
    detail: wx.getStorageSync('currentAssessment')
  },
  onLoad() {
    console.log(this.data.detail)
  },
  solve(e) {
    const index = e.currentTarget.dataset.index
    wx.navigateTo({ url: `../assessmentContent/assessmentContent?index=${index}`})
  }
})
