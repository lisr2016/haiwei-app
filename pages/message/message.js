Page({
  data: {
    message: { title: '', content: '' },
  },
  onLoad() {
    const { title, content } = wx.getStorageSync('message');
    this.setData({ 'message.title': title, 'message.content': content })
  },
})
