import { ajax } from '../../utils/http'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
import { formatTime } from '../../utils/util'

Component({
  properties: {},
  data: {
    form: {
      time: new Date(formatTime(new Date())).getTime(),
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
    maxDate: new Date().getTime(),
    show: false
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
      this.setData({ show: true, })
    },

    dateConfirm(e) {
      const date = formatTime(new Date(e.detail))
      this.setData({ 'form.time': new Date(date).getTime(), show: false })
    },

    dateClose() {
      this.setData({ show: false })
    },
    next() {
      const num = this.data.active
      if (num === 4) {
        setTimeout(() => {
          const keys = Object.keys(this.data.form)
          let on = true
          keys.forEach(key => {
            if (key !== 'govCorrected' && key !== 'selfCorrected') {
              if(this.data.form[key] === '') {
                on = false
                return Toast({ type: 'fail', context: this, message: '请检查表单是否输入完整！' })
              }
            }
          })
          if (on) {
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
          }

        }, 500)
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
