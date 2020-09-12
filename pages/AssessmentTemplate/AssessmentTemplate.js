Page({
  data: {},
  async onLoad() {
    await this.getData()
    console.log('===')
  },

  getData() {
    setTimeout( () => {
      console.log('---')
    }, 1000)
  },
})
