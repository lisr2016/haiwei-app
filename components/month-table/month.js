import { ajax } from '../../utils/http'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'

Component({
  data: {
    form: { time: new Date().getTime(), kitchenWaste: '', recyclableWaste: '', harmfulWaste: '', bulkyWaste: '', otherWaste: '' },
    show: false,
    minDate: new Date("2020/01/01 00:00:00").getTime(),
  },
  ready() {

  },
  methods: {
    input(e) {
      const inputModel = e.currentTarget.dataset.name;
      const value = e.detail.value;
      this.setData({ [`form.${inputModel}`]: value });
    },
    showDate() {
      this.setData({ show: true, })
    },

    dateConfirm(e) {
      console.log(e.detail)
      this.setData({ 'form.time': e.detail, show: false })
    },

    dateClose() {
      this.setData({ show: false })
    },
    submit() {
      console.log(this.data.form)
      const params = Object.assign({}, this.data.form, { time: new Date(this.data.form.time).getMonth() + 1 })
      ajax('/v1/domestic/monthly', params, 'post').then(() => {
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
  }
})
