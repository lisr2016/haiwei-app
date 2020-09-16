Page({
  data: {
    form: { end: '', target: '', start: '', name: '', unit: '', object: '', radio: '0', content: '' },
    show: { time: false, picker: false, isStart: true, isUnit: true, isContent: false },
    radioGroup: [{ label: '自我考核', name: '0' }, { label: '互相考核', name: '1' }],
    unitColumns: ['1海淀区万寿路社区服务中心', '海淀区XXX路XXX院', '温州', '嘉兴', '湖州'],
    objectColumns: ['2海淀区万寿路社区服务中心', '海淀区XXX路XXX院', '温州', '嘉兴', '湖州'],
    contentColumns: ['常规巡检', '专项检查', 'XXXXX'],
  },
  onLoad: function () {

  },
  onChange(e) {
    this.setData({ 'form.radio': e.detail })
  },

  changeShow(e) {
    this.setData({
      'show.time': true,
      'show.isStart': e.currentTarget.dataset.show === 'start'
    })
  },
  close() {
    this.setData({ 'show.time': false })
  },

  confirm(e) {
    const str = `form.${this.data.show.isStart ? 'start' : 'end'}`
    this.setData({ [str]: e.detail, 'show.time': false })
  },
  showPicker(e) {
    this.setData({
      'show.isUnit': e.currentTarget.dataset.show === 'unit',
      'show.isContent': e.currentTarget.dataset.show === 'content',
      'show.picker': true
    })
  },
  confirmPicker(e) {
    const str = `form.${this.data.show.isUnit ? 'unit' : this.data.show.isContent ? 'content' : 'object'}`
    this.setData({ 'show.picker': false, [str]: e.detail.value })
  },
  closePicker() { this.setData({ 'show.picker': false }) },
  created() {},
  textChange(e) {
    const str = `form.${e.currentTarget.dataset.show === 'name' ? 'name' : 'target'}`
    this.setData({ [str]: e.detail })
  }
})
