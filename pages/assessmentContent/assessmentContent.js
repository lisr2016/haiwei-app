import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  data: {
    fileList: [],
    params: { minHeight: 200 },
    index: 0,
    value: '',
    form: {
      description: '',
      urls: [],
    },
    uploadParams: { filename: '' },
    currentAssessment: [],
  },
  onLoad(option) {
    if (option && option.index) {
      const currentAssessment = wx.getStorageSync('currentAssessment')
      const currentForm = currentAssessment['params'][option.index]
      Object.keys(this.data.form).forEach(key => {
        this.setData({ [`form.${key}`]: currentForm[key] })
      })
      this.setData({
        index: option.index,
        value: currentAssessment['content'][option.index],
        currentAssessment,
        fileList: currentForm.urls.map(item => ({ url: item }))
      })
    }
  },
  input(e) {
    this.setData({ 'form.description': e.detail });
  },

  uploadFile(uploadFile) {
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: 'https://chiateocean.com.cn/hdhq/v1/upload/pic', // 上传的服务器接口地址
        filePath: uploadFile,
        header: { token: wx.getStorageSync('token') },
        formData: this.data.uploadParams,
        name: 'file', //上传的所需字段，后端提供
        success: (res) => {
          // 上传完成操作
          const data = JSON.parse(res.data)
          const url = data.data[0].Url
          resolve({
            url
          })
        },
        fail: (err) => {
          //上传失败：修改pedding为reject
          reject(err)
        }
      });
    })
  },
  beforeRead(e) {
    console.log(e)
    const { file, callback } = e.detail;
    this.setData({ 'uploadParams.filename': file[0].path })
    callback(true);
  },
  /**
   * @param {object} event event.detail.file: 当前读取的文件
   * @description 上传图片后操作
   */
  afterRead(event) {
    wx.showLoading({
      title: '上传中...'
    })
    const { file } = event.detail //获取所需要上传的文件列表
    let uploadPromiseTask = [] //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {

      //全部上传完毕
      this.setData({
        fileList: this.data.fileList.concat(res)
      })
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading()
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  /**
   * @param {object} event event.detail.index: 删除图片的序号值
   * @description 删除已上传的图片
   */
  deleteImg(event) {
    const delIndex = event.detail.index
    const { fileList } = this.data
    fileList.splice(delIndex, 1)
    this.setData({
      fileList
    })
  },

  submit() {
    this.setData({ 'form.urls': this.data.fileList.map(item => item.url) })
    // if (!this.data.form.urls.length) return Toast({ type: 'fail', context: this, message: '请上传图片' })
    if (!this.data.form.description) return Toast({ type: 'fail', context: this, message: '请填写评价' });

    const currentAssessment = this.data.currentAssessment
    currentAssessment['params'][this.data.index] = this.data.form
    this.setData({ currentAssessment })
    wx.setStorageSync('currentAssessment', currentAssessment);
    Toast({
      type: 'success',
      context: this,
      message: '处理成功！',
      onClose: () => {
        wx.navigateBack()
      }
    })

  }
});
