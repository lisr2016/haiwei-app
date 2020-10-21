import { ajax } from '../../utils/http'

Page({
  data: {
    list: [],
  },
  onLoad() {
    ajax('/v1/get/policy/list', null,'get').then(res =>  {
      this.setData({ list: res.list })
    })
  },
  jump(e) {
    wx.downloadFile({
      url: e.currentTarget.dataset.url,
      success: function (res) {
        let filePath = res.tempFilePath; //微信临时文件路径
        wx.openDocument({
          filePath,
          showMenu: true,
          success: function () {
            console.log('打开网络文档成功')
          },
          fail: function(error){
            console.log("打开网络文档失败")
          }
        })
      }
    })
  }
})
