function ajax(url,data,method){
  const pages = getCurrentPages();

  const currentPage = pages[pages.length - 1];
  let token = wx.getStorageSync('token')
  if(!token && currentPage.route.indexOf('/login') !== -1){
    wx.navigateTo({ url: `/pages/Login/Login` });
  }
  return new Promise((resolve,reject)=>{
    wx.request({
      url: url,
      data: data || {},
      method: method || 'get',
      header: { 'token': token },
      success: function (obj) {
        if (obj.statusCode === 200) {
          if (obj.data.code === 0) {
            resolve(obj.data.data)
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

module.exports = { ajax, baseUrl: 'https://chiateocean.com.cn/hdhq' }
