/**
 * 小程序封装的请求方法
 * ajax, getToken
 * 使用方法：
 * 1.页面引入:  var http = require('../../utils/http.js')
 * 2.调用:  http.ajax(地址，数据，请求方法)  http.getToken()
 * 注意：
 * getToken的请求的url、失败跳转的url需要配置
 */
var config = require("./config");
var Promise = require('../plugins/promise.js');
function ajax(url,data,method){
  let token = wx.getStorageSync('token')
  if(!token && url.indexOf('/login') < 0){
    wx.navigateTo({
      url: `/pages/login/login`
    });
  }
  return new Promise((resolve,reject)=>{
    wx.request({
      url: url,
      data: data || {},
      method: method || 'get',
      header: {
        'token': token
      },
      success: function (obj) {
        if (obj.statusCode === 200) {
          if (obj.data.Code === 1000) {

          }
          else {
            resolve(obj.data);
          }
        } else if (obj.statusCode === 401) {
          // 重新获取token
          resolve(obj.data);
        }
        else{
          resolve(obj.data);
        }
      },
      fail: function (res) {
        reject(res);
      }
    })
  })
}

module.exports = { ajax }
