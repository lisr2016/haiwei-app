Page({
  data: {
    list: [],
  },
  onLoad() {
    wx.downloadFile({
      url: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
      success: function (res) {
        console.log(res)
        let filePath = res.tempFilePath; //微信临时文件路径
        console.log(filePath)
        wx.openDocument({
          filePath,
          showMenu: false,  //是否显示右上角菜单按钮  默认为false
          success: function (res) {
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
