import { getWeeks } from '../../utils/util'
import { ajax } from '../../utils/http'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Component({
  properties: {},
  data: {
    form: {
      time: '',
      consignee: '',
      guide: '',
      inspector: '',
      kitchenWasteCollectors: '',
      kitchenWastePositions: '',
      recyclableWasteCollectors: '',
      recyclableWastePositions: '',
      harmfulWasteCollectors: '',
      harmfulWastePositions: '',
      otherWasteCollectors: '',
      otherWastePositions: '',
      medicWasteCollectors: '',
      medicWastePositions: '',
      bulkyWastePositions: '',
      kitchenWaste: '',
      recyclableWaste: '',
      harmfulWaste: '',
      otherWaste: '',
      medicWaste: '',
    },
    time: '',
    week: [],
    active: 0,
    show: false
  },
  ready() {
    const week = []
    getWeeks().forEach(item => {
      week.push({ label: `${item.start}到${item.end}`, value: item.timestamp })
    })
    this.setData({ week: week.reverse() })
  },
  methods: {
    input(e) {
      const inputModel = e.currentTarget.dataset.name;
      const value = e.detail.value;
      const type = e.currentTarget.dataset.type
      const re = /^[0-9]+.?[0-9]*/;
      if (type === 'number') {
        if (re.test(value)) {
          this.setData({ [`form.${inputModel}`]: value });
        } else {
          Toast({ type: 'fail', context: this, message: '请输入数字内容！' })
        }
      } else {
        this.setData({ [`form.${inputModel}`]: value });
      }
    },
    showDate() {
      this.setData({ show: true, })
    },

    confirm(e) {
      this.setData({ 'form.time': e.detail.value.value, show: false, time: e.detail.value.label })
    },

    dateClose() {
      this.setData({ show: false })
    },
    next() {
      const num = this.data.active
      if (num === 2) {
        const keys = Object.keys(this.data.form)
        let on = true
        keys.forEach(key => {
          if(!this.data.form[key]) {
            on = false
            Toast({ type: 'fail', context: this, message: '请检查表单是否输入完整！' })
          }
        })
        if (on) {
          ajax('/v1/domestic/weekly', this.data.form, 'post').then(() => {
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
