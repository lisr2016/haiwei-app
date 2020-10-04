import { ajax } from '../../utils/http'

Page({
  data: {
    detail: {},
  },
  async onLoad(options) {
    const detail = wx.getStorageSync('messageList').find(item => item.id === options.id);
    this.setData({ detail })
    await ajax(`/v1/message/${options.id}`, null)
  },
  jump() {
    const mock = {
      '2': `../lifeRubbish/lifeRubbish?type=0`,
      '3': `../lifeRubbish/lifeRubbish?type=1}`,
      '4': `../lifeRubbish/lifeRubbish?type=2`,
      '5': `../medicineRubbish/medicineRubbish`,
    }
    wx.navigateTo({ url: mock[this.data.detail.type] })
  }
})
