import { ajax } from '../../utils/http'
Page({
  data: {
    hasUserInfo: false,
    movies: [
      {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600160520268&di=d25dc35f751f762da12878a6149ba995&imgtype=0&src=http%3A%2F%2Fwww.itmsc.cn%2Fuploads%2Fallimg%2F171125%2F112214D04_0.png'},
      {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600160701110&di=f75d9b16b73656f8f180b9f0b16ef85d&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F46%2F01%2F5bfcc8c6bef5c.jpg%2521%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue'},
      {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600160596837&di=29400d565d240c627e7c43048bb0a7c1&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F28%2F90%2F5b7d5e5a6efa2_610.jpg'},
      {url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2142142353,1341383433&fm=26&gp=0.jpg'},
    ],
    card: [
      { label: '生活垃圾', url: '../lifeRubbish/lifeRubbish', img: '../../img/life.jpeg' },
      { label: '医疗垃圾', url: '../medicineRubbish/medicineRubbish', img: '../../img/medicine.jpeg' },
      // { label: '新建考核', url: '../CreatedAssessment/CreatedAssessment' },
      // { label: '量化填报', url: '../Reporting/Reporting' },
      // { label: '考核模版', url: '../AssessmentTemplate/AssessmentTemplate' },
      // { label: '量化报表', url: '../QuantifyTable/QuantifyTable' },
      // { label: '工作记录', url: '../WorkRecording/WorkRecording' },
    ],
    message: [
      // { text: '您有一个自我考核没有完成', url: '' },
      // { text: '您有一个跨部门考核没有完成', url: '' },
      // { text: '上级部门发布重要信息', url: '' },
      // { text: '考核未通过，需要整改', url: '' },
      // { text: '您有一个考核需要验证', url: '' },
    ]
  },
  onLoad: async function () {
    const user = wx.getStorageSync('user');
    if (!user) {
      this.getUserInfo().then(res => {
        wx.setStorageSync('user', res.orgInfo);
        this.setData({ hasUserInfo: true })
        if (!res.orgInfo.initialized) {
          wx.navigateTo({ url: `/pages/perfect/perfect` })
        }
      })
    } else {
      this.setData({ hasUserInfo: true })
    }
    this.getMessage().then(res => {
      console.log(res)
    })
  },
  onShow() {
    if (this.data.hasUserInfo) {
      const user = wx.getStorageSync('user');
      if (!user.initialized) {
        wx.navigateTo({ url: `/pages/perfect/perfect` })
      }
    }
  },
  jump(e) {
    const { url } = e.currentTarget.dataset.currentdata
    wx.navigateTo({ url })
  },
  getMessage() {
    return ajax('/v1/message/list', null)
  },
  getUserInfo() {
    return ajax('/v1/user/info', null)
  },
})
