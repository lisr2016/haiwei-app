import { ajax } from '../../utils/http'

Page({
  data: {
    message: { title: '', content: '' },
  },
  onLoad(option) {
    ajax(`/v1/message/${option.id}`, null, 'post').then(res => {
      this.setData({ 'message.title': res.title, 'message.content': res.content })
    })
  },
})
