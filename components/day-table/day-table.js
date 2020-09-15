import { ajax } from '../../utils/http'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'

Component({
  properties: {},
  data: {
    form: {
      time: new Date().getTime(),
      meetingTimes: '',
      meetingHost: '',
      meetingContent: '',
      selfTimes: '',
      selfProblems: '',
      selfContent: '',
      selfCorrected: false,
      advertiseTimes: '',
      advertiseContent: '',
      traningTimes: '',
      trainees: '',
      traningContent: '',
      govTimes: '',
      govProblems: '',
      govContent: '',
      govCorrected: false
    },
    active: 0,
    minDate: new Date("2020/01/01 00:00:00").getTime(),
    show: { date: false }
  },
  ready() {

  },
  methods: {
    input(e) {
      const inputModel = e.currentTarget.dataset.name;
      const value = e.detail.value;
      this.setData({ [`form.${inputModel}`]: value });
    },
    onChange(e) {
      const inputModel = e.currentTarget.dataset.name;
      this.setData({ [`form.${inputModel}`]: e.detail });
    },
    showDate() {
      this.setData({ 'show.date': true, })
    },

    dateConfirm(e) {
      this.setData({ 'form.time': e.detail, 'show.date': false })
    },

    dateClose() {
      this.setData({ 'show.date': false })
    },
    next() {
      const num = this.data.active
      if (num === 4) {
        ajax('/v1/domestic/daily', this.data.form, 'post').then(() => {
          Toast({
            type: 'success',
            context: this,
            message: '提交成功',
            onClose: () => {
              wx.navigateTo({ url: `/pages/index/index` })
            },
          });
        })
        return
      }
      this.setData({
        active: num + 1
      })
    },
    up() {
      const num = this.data.active
      if (num === 0) return
      this.setData({
        active: num - 1
      })
    }
  }
})
