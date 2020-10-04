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
      const list = wx.getStorageSync('messageList');
      this.setData({
        list: list.filter(item => item.isRead === isRead),
      })
    }
  },
  jump(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `../messageDetail/messageDetail?id=${id}`})
  },
})
