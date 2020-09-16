import { ajax } from '../../utils/http'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'

Page({
  data: {
    form: { corporationPhone: '', managerPhone: '', bednum: '', address: '', level: '', street: '' },
    streetData: [
      '万寿路街道',
      '永定路街道',
      '羊坊店街道',
      '甘家口街道',
      '八里庄街道',
      '紫竹院街道',
      '北下关街道',
      '北太平庄街道',
      '学院路街道',
      '中关村街道',
      '海淀街道',
      '青龙桥街道',
      '清华园街道',
      '燕园街道',
      '香山街道',
      '清河街道',
      '花园路街道',
      '西三旗街道',
      '马连洼街道',
      '田村路街道',
      '上地街道',
      '万柳地区',
      '东升地区',
      '曙光街道',
      '温泉地区',
      '四季青地区',
      '西北旺地区',
      '苏家坨地区',
      '上庄地区'
    ],
    levelValues: ['三级医院','二级医院','一级医院','门诊部','诊所','未定级','医务室','卫生室','社区卫生服务中心','社区卫生服务站'],
    isLevel: true,
    show: false,
    name: ''
  },
  onLoad() {
    this.setData({ name: wx.getStorageSync('user').name })
  },
  submit() {
    if (!this.data.form.managerPhone) return Toast.fail('请输入负责人电话');
    if (!this.data.form.address) return Toast.fail('请输入地址');
    if (!this.data.form.level) return Toast.fail('请输入级别');
    if (!this.data.form.street) return Toast.fail('请输入街道');

    const params =  Object.assign({}, this.data.form, { level: String(this.data.levelValues.findIndex(item => item === this.data.form.level) + 1) })
    ajax('/v1/init/org/info', params, 'post').then(() => {
      const user = wx.getStorageSync('user');
      wx.setStorageSync('user', Object.assign({}, user, { initialized: true }));
      wx.navigateTo({ url: `/pages/index/index` })
    })
  },
  input(e) {
    const inputModel = e.currentTarget.dataset.name;
    const value = e.detail.value;
    this.setData({ [`form.${inputModel}`]: value })
  },
  popupShow(e) {
    this.setData({ show: true, isLevel: e.currentTarget.dataset.name === 'level' })
  },
  close() {
    this.setData({ show: false, })
  },
  confirm(e) {
    const model = `form.${this.data.isLevel ? 'level' : 'street'}`
    this.setData({ [model]: e.detail.value, show: false })
  }
})
