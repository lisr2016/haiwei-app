import { ajax } from '../../utils/http'

Page({
  data: {},
  onLoad() {
    ajax('/report/list', null, 'post').then(res => {
      console.log(res)
    })
  },
})
