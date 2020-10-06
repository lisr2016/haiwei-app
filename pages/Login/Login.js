import { ajax } from '../../utils/http'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  data: {
    form:{
      phone: '',
      password: '',
      verifyCode:''
    },
    checked: false,
    isCheck: false,
    isClosed: true,
    codeText: '发送验证码',
    isCode: true,
  },
  onLoad() {
    const account = wx.getStorageSync('account')
    if (account) {
      this.setData({
        'form.phone': account.phone,
        'form.password': account.password,
        checked: true
      })
    }
  },

  clickIcon() {
    this.setData({ isClosed: !this.data.isClosed })
  },
  // 记住密码切换
  onChange({ detail }) {
    this.setData({ checked: detail });
  },
  jump() {
    wx.navigateTo({ url: "../ResetPassword/ResetPassword" });
  },
  // 获取验证码
  getCode() {
    if (!this.data.form.phone) return Toast.fail('请输入手机号');
    if (!this.data.isCode) return Toast.fail('请勿重复发送验证码');

    ajax('/get/verifyCode', { phone: this.data.form.phone }, 'get', true ).then(res => {
      Toast.success('验证码已发送至您手机，请注意查收');
      wx.setStorageSync("sessionid", res.header["Set-Cookie"])
      let num = 60
      const timer = setInterval(() => {
        if (num === 1) {
          this.setData({ codeText: '重新发送', isCode: true })
          clearInterval(timer)
        } else {
          num -= 1
          this.setData({ codeText: num + 's后重发', isCode: false })
        }
      }, 1000)
    })
  },
  // 输入框简易双向绑定
  input(e) {
    const inputModel = e.currentTarget.dataset.name;
    const value = e.detail.value;
    this.setData({ [`form.${inputModel}`]: value });
  },
  // change(e) {
  //   if (e.detail.length === 4) {
  //     ajax('/check/verifyCode', { phone: this.data.form.phone, verifyCode: e.detail }, 'get', false, { cookie: wx.getStorageSync("sessionid") }).then(() => {
  //       this.setData({ isCheck: true })
  //     })
  //   }
  // },
  // 登录
  login() {
    if (!this.data.form.phone) return Toast.fail('请输入手机号');
    if (!this.data.form.password) return Toast.fail('请输入密码');
    if (!this.data.form.verifyCode) return Toast.fail('请输入验证码');

    // // 如果选择记住密码
    // if (this.data.checked) {
    //   const { password, phone } = this.data.form
    //   wx.setStorageSync('account', { password, phone })
    // }

    ajax('/login', this.data.form, 'post', false, { cookie: wx.getStorageSync("sessionid") }).then(res => {
      wx.setStorageSync('token', res.token)
      wx.navigateTo({ url: `/pages/index/index` })
    })
  },
  register() {
    wx.navigateTo({ url: `/pages/register/register` })
  }
})
