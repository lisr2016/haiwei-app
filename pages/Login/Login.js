import { ajax, baseUrl } from '../../utils/http'
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
    isClosed: true
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
    ajax(`${baseUrl}/get/VerifyCode`, { phone: this.data.form.phone }).then(() => {
      Toast.success('验证码已发送至您手机，请注意查收');
    })
  },
  // 输入框简易双向绑定
  input(e) {
    const inputModel = e.currentTarget.dataset.name;
    const value = e.detail.value;
    this.setData({ [`form.${inputModel}`]: value })
    if (inputModel === 'code') {
      ajax(`${baseUrl}/check/VerifyCode`, { phone: this.data.form.phone, verifyCode: e.detail.value }).then(() => {
        this.setData({ isCheck: true })
      })
    }
  },
  // 登录
  login() {
    if (!this.data.form.phone) return Toast.fail('请输入手机号');
    if (!this.data.form.password) return Toast.fail('请输入密码');
    if (!this.data.form.verifyCode) return Toast.fail('请输入验证码');

    // 如果选择记住密码
    if (this.data.checked) {
      const { password, phone } = this.data.form
      wx.setStorageSync('account', { password, phone })
    }

    // 如果验证码校验成功
    if (this.data.isCheck) {
      ajax(`${baseUrl}/login`, { phone: this.data.form.phone, password: this.data.form.password }, 'post').then(res => {
        wx.setStorageSync('token', res.data)
        wx.navigateTo({ url: `/pages/index/index` })
      })
    } else {
      Toast.fail('验证码校验错误,请检查验证码！');
    }
  }
})
