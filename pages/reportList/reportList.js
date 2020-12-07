import { ajax } from '../../utils/http'

Page({
    data: {
        list: [],
        type: '',
    },
    onLoad(options) {
        if (options && options.type) {
            ajax('/v1/report/list', { type: options.type }, 'post').then(res => {
                console.log(res)
                this.setData({ list: res, type: options.type })
            })
        }
    },
    jump(e) {
        const index = e.currentTarget.dataset.type
        wx.setStorageSync('currentReport', this.data.list[index])
        wx.navigateTo({ url: `/pages/reportDetail/reportDetail?type=${this.data.type}` })
    }
})