import { ajax } from '../../utils/http'

import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  data: {
    form:{
      phone: '',
      password: '',
      verifyCode:'',
      organizationId: ''
    },
    organization: '',
    checked: false,
    isCheck: false,
    codeText: '发送验证码',
    isCode: true,
    show: false,
    columns: [{ text: 'll', id: '111' }]
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
  organizationInput(e) {
    this.setData({ organization: e.detail.value });
  },
  // 输入框简易双向绑定
  input(e) {
    const inputModel = e.currentTarget.dataset.name;
    const value = e.detail.value;
    this.setData({ [`form.${inputModel}`]: value });
  },
  change(e) {
    if (e.detail.length === 4) {
      ajax('/check/verifyCode', { phone: this.data.form.phone, verifyCode: e.detail }, 'get', false, { cookie: wx.getStorageSync("sessionid") }).then(() => {
        this.setData({ isCheck: true })
      })
    }
  },
  // 登录
  goRegister() {
    if (!this.data.form.phone) return Toast.fail('请输入手机号');
    if (!this.data.form.password) return Toast.fail('请输入密码');
    if (!this.data.form.verifyCode) return Toast.fail('请输入验证码');
    if (!this.data.form.organizationId) return Toast.fail('请输入机构名称');

    // 如果验证码校验成功
    if (this.data.isCheck) {
      const { phone, password, organizationId } = this.data.form
      const params = { phone, password, organizationId }
      ajax('/signup', params, 'post').then(res => {
        wx.setStorageSync('token', res.token)
        wx.navigateTo({ url: `/pages/index/index` })
      })
    } else {
      Toast.fail('验证码校验错误,请检查验证码！');
    }
  },
  search() {
    if (this.data.organization !== '') {
      ajax('/get/org/list',{ search: this.data.organization }, 'post').then(res => {
        this.setData({
          show: true,
          columns: res.list.map(item => ({ text: item.name, id: item.organizationId }))
        })
      })
    } else {
      Toast.fail('请输入机构名称！');
    }
  },
  close() {
    this.setData({ show: false })
  },
  onConfirm(e) {
    this.setData({
      show: false,
      organization: e.detail.value.text,
      'form.organizationId': e.detail.value.id
    })
  }
})
