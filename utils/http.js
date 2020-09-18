function ajax(url,data,method, all = false, header = { token: wx.getStorageSync('token') }){
  const pages = getCurrentPages();
  const token = wx.getStorageSync('token')
  const currentPage = pages[pages.length - 1];
  if(!token && currentPage.route !== 'pages/Login/Login'){
    wx.navigateTo({ url: `/pages/Login/Login` });
    return
  }
  const params = method === 'post' ? filterParams(data, true) : filterParams(data)
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `https://chiateocean.com.cn/hdhq${url}`,
      data: params || {},
      method: method || 'get',
      header,
      success: function (obj) {
        if (obj.statusCode === 200) {
          if (obj.data.code === 0) {
            resolve(all ? obj : obj.data.data)
          }
        } else {
          wx.showToast({ title: obj.data.msg, icon: 'loading' })
          reject(obj.data);
        }
      },
      fail: function (res) {
        reject(res);
        wx.showToast({ title: String(res), icon: 'loading' })
      }
    })
  })
}

function filterParams (params, post) {
  const entityType = ['number', 'boolean']

  if (post) entityType.push('string')

  if (entityType.includes(typeof params) || Array.isArray(params)) {
    return params
  }

  if (typeof params === 'object' && params) {
    const result = {}

    Object.keys(params).forEach(key => {
      if (params[key] !== '') {
        result[key] = params[key]
      }
    })

    return result
  }
}

module.exports = { ajax }
