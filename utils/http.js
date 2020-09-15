function ajax(url,data,method, all = false, header = { token: wx.getStorageSync('token') }){
  const pages = getCurrentPages();
  const token = wx.getStorageSync('token')
  const currentPage = pages[pages.length - 1];
  if(!token && currentPage.route !== 'pages/Login/Login'){
    wx.navigateTo({ url: `/pages/Login/Login` });
  }
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `https://chiateocean.com.cn/hdhq${url}`,
      data: data || {},
      method: method || 'get',
      header,
      success: function (obj) {
        if (obj.statusCode === 200) {
          if (obj.data.code === 0) {
            resolve(all ? obj : obj.data.data)
          }
        } else {
          reject(obj.data);
        }
      },
      fail: function (res) {
        reject(res);
      }
    })
  })
}

module.exports = { ajax }
