import { ajax } from '../../utils/http'

Page({
  data: {
    message: { title: '', content: '' },
  },
  onLoad(options) {
    if (options && options.type) {
      const arr = ['已读', '未读']
      wx.setNavigationBarTitle({
        title: `${arr[options.type]}消息`
      })
      // ajax(`/v1/message/${options.id}`, null).then(res => {
      //   console.log(res)
      // })
    }
  },
})
