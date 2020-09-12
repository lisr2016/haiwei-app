Component({
  properties: {},
  data: {
    form: {
      date: '',
      a: '', b: '', c: '', d: '', e: '', f: ''
    },
    active: 0,
    show: { date: false }
  },
  ready() {

  },
  methods: {
    showDate() {
      this.setData({ 'show.date': true, })
    },

    dateConfirm(e) {
      this.setData({ 'form.date': e.detail, 'show.date': false })
    },

    dateClose() {
      this.setData({ 'show.date': false })
    },
    next() {
      const num = this.data.active
      if (num === 4) return
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
