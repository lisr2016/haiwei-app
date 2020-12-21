import { ajax } from '../../utils/http'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  data: {
    detail:null,
    redio: '0',
    redio2: '0',
    fileListA1: [],
    fileListA2: [],
    fileListA3: [],
    fileListA4: [],
    fileListB1: [],
    fileListB2: [],
    fileListB3: [],
    fileListB4: [],
    fileListB5: [],
    fileListB6: [],
    fileListB7: [],
    fileListB8: [],
    fileListB9: [],
    fileListB10: [],
    fileListC1: [],
    fileListC2: [],
    fileListC3: [],
    fileListC4: [],
    fileListC5: [],
    fileListD1: [],
    fileListD2: [],
    fileListD3: [],
    fileListD4: [],
    fileListE1: [],
    fileListE2: [],
    fileListE3: [],
    fileListE4: [],
    fileListE5: [],
    fileListE6: [],
    fileListF1: [],
    fileListF2: [],
    fileListF3: [],
    fileListG1: [],
    fileListG2: [],
    fileListG3: [],
    fileListG4: [],
    fileListH1: [],
    fileListH2: [],
    fileListH3: [],
    fileListH4: [],
    fileListH5: [],
    uploadParams: { filename: '' },
    contents: {
      a1: {value: '', pics: []},
      a2: {value: '', pics: []},
      a3: {value: '', pics: []},
      a4: {value: '', pics: []},
      b1: {value: '', pics: []},
      b2: {value: '', pics: []},
      b3: {value: '', pics: []},
      b4: {value: '', pics: []},
      b5: {value: '', pics: []},
      b6: {value: '', pics: []},
      b7: {value: '', pics: []},
      b8: {value: '', pics: []},
      b9: {value: '', pics: []},
      b10: {value: '', pics: []},
      c1: {value: '', pics: []},
      c2: {value: '', pics: []},
      c3: {value: '', pics: []},
      c4: {value: '', pics: []},
      c5: {value: '', pics: []},
      d1: {value: '', pics: []},
      d2: {value: '', pics: []},
      d3: {value: '', pics: []},
      d4: {value: '', pics: []},
      e1: {value: '', pics: []},
      e2: {value: '', pics: []},
      e3: {value: '', pics: []},
      e4: {value: '', pics: []},
      e5: {value: '', pics: []},
      e6: {value: '', pics: []},
      f1: {value: '', pics: []},
      f2: {value: '', pics: []},
      f3: {value: '', pics: []},
      g1: {value: '', pics: []},
      g2: {value: '', pics: []},
      g3: {value: '', pics: []},
      g4: {value: '', pics: []},
      h1: {value: '', pics: []},
      h2: {value: '', pics: []},
      h3: {value: '', pics: []},
      h4: {value: '', pics: []},
      h5: {value: '', pics: []},
    },
    typeA: [
      {name: '1', value: '有'},
      {name: '0', value: '无'},
    ],
    typeB: [
      {name: '1', value: '是'},
      {name: '0', value: '否'},
    ],
    typeC: [
      {name: '1', value: '规范'},
      {name: '0', value: '不规范'},
    ],
    typeD: [
      {name: '1', value: '明确'},
      {name: '0', value: '不明确'},
    ]
  },

  changeRedio(e) {
    this.setData({ redio: e.detail.value })
  },

  changeRedio2(e) {
    this.setData({ redio2: e.detail.value })
  },
  
  radioChangeA1: function(e) {
    this.data.contents.a1.value = e.detail.value;
  },
  
  radioChangeA2: function(e) {
    this.data.contents.a2.value = e.detail.value;
  },
  
  radioChangeA3: function(e) {
    this.data.contents.a3.value = e.detail.value;
  },
  
  
  radioChangeA4: function(e) {
    this.data.contents.a4.value = e.detail.value;
  },
  
  
  radioChangeB1: function(e) {
    this.data.contents.b1.value = e.detail.value;
  },
  
  radioChangeB2: function(e) {
    this.data.contents.b2.value = e.detail.value;
  },
  
  radioChangeB3: function(e) {
    this.data.contents.b3.value = e.detail.value;
  },
  
  radioChangeB4: function(e) {
    this.data.contents.b4.value = e.detail.value;
  },
  
  radioChangeB5: function(e) {
    this.data.contents.b5.value = e.detail.value;
  },
  
  radioChangeB6: function(e) {
    this.data.contents.b6.value = e.detail.value;
  },
  
  radioChangeB7: function(e) {
    this.data.contents.b7.value = e.detail.value;
  },
  
  radioChangeB8: function(e) {
    this.data.contents.b8.value = e.detail.value;
  },
  
  radioChangeB9: function(e) {
    this.data.contents.b9.value = e.detail.value;
  },
  
  radioChangeB10: function(e) {
    this.data.contents.b10.value = e.detail.value;
  },
  
  radioChangeC1: function(e) {
    this.data.contents.c1.value = e.detail.value;
  },
  
  radioChangeC2: function(e) {
    this.data.contents.c2.value = e.detail.value;
  },
  
  radioChangeC3: function(e) {
    this.data.contents.c3.value = e.detail.value;
  },
  
  radioChangeC4: function(e) {
    this.data.contents.c4.value = e.detail.value;
  },
  
  radioChangeC5: function(e) {
    this.data.contents.c5.value = e.detail.value;
  },
  
  radioChangeD1: function(e) {
    this.data.contents.d1.value = e.detail.value;
  },
  
  radioChangeD2: function(e) {
    this.data.contents.d2.value = e.detail.value;
  },
  
  radioChangeD3: function(e) {
    this.data.contents.d3.value = e.detail.value;
  },
  
  radioChangeD4: function(e) {
    this.data.contents.d4.value = e.detail.value;
  },
  
  radioChangeE1: function(e) {
    this.data.contents.e1.value = e.detail.value;
  },
  
  radioChangeE2: function(e) {
    this.data.contents.e2.value = e.detail.value;
  },
  
  radioChangeE3: function(e) {
    this.data.contents.e3.value = e.detail.value;
  },
  
  radioChangeE4: function(e) {
    this.data.contents.e4.value = e.detail.value;
  },
  
  radioChangeE5: function(e) {
    this.data.contents.e5.value = e.detail.value;
  },
  
  radioChangeE6: function(e) {
    this.data.contents.e6.value = e.detail.value;
  },
  
  radioChangeF1: function(e) {
    this.data.contents.f1.value = e.detail.value;
  },
  
  radioChangeF2: function(e) {
    this.data.contents.f2.value = e.detail.value;
  },
  
  radioChangeF3: function(e) {
    this.data.contents.f3.value = e.detail.value;
  },
  
  radioChangeG1: function(e) {
    this.data.contents.g1.value = e.detail.value;
  },
  
  radioChangeG2: function(e) {
    this.data.contents.g2.value = e.detail.value;
  },
  
  radioChangeG3: function(e) {
    this.data.contents.g3.value = e.detail.value;
  },
  
  radioChangeG4: function(e) {
    this.data.contents.g4.value = e.detail.value;
  },
  
  radioChangeH1: function(e) {
    this.data.contents.h1.value = e.detail.value;
  },
  
  radioChangeH2: function(e) {
    this.data.contents.h2.value = e.detail.value;
  },
  
  radioChangeH3: function(e) {
    this.data.contents.h3.value = e.detail.value;
  },
  
  radioChangeH4: function(e) {
    this.data.contents.h4.value = e.detail.value;
  },
  
  radioChangeH5: function(e) {
    this.data.contents.h5.value = e.detail.value;
  },
  
  listenerRadioGroup:function(e) {
    console.log(e);
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onHide:function(){
    // 页面隐藏
  },
  
  onShow() {
    this.setData({ detail: wx.getStorageSync('currentAssessment') })
  },
  // solve(e) {
  //   const index = e.currentTarget.dataset.index
  //   wx.navigateTo({ url: `../assessmentContent/assessmentContent?index=${index}`})
  // },
  onUnload: function () {
    wx.removeStorageSync('currentAssessment')
  },
  submit() {
    const { id, type } = wx.getStorageSync('currentAssessment');
    let on = true;
    let contents = this.data.contents;
    Object.keys(contents).forEach(key => {
      if (!contents[key].value) {
        Toast({ type: 'fail', context: this, message: '请完成所有内容处理' });
        on = false
      }
    });
    if (on) {
      ajax('/v1/upload/assess', { content: contents, id, type }, 'post').then(() => {
        Toast({
          type: 'success',
          context: this,
          message: '提交成功',
          onClose: () => {
            wx.navigateTo({ url: '../assessmentList/assessmentList'})
          }
        })
      })
    }
  },
  afterReadA1(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      //全部上传完毕
      this.setData({
        fileListA1: this.data.fileListA1.concat(res)
      });
      this.data.contents['a1']['pics'] = this.data.fileListA1
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadA2(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListA2: this.data.fileListA2.concat(res)
      });
      this.data.contents['a2']['pics'] = this.data.fileListA2
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadA3(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      //全部上传完毕
      this.setData({
        fileListA3: this.data.fileListA3.concat(res)
      });
      this.data.contents['a3']['pics'] = this.data.fileListA3
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadA4(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListA4: this.data.fileListA4.concat(res)
      });
      this.data.contents['a4']['pics'] = this.data.fileListA4
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB1(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB1: this.data.fileListB1.concat(res)
      });
      this.data.contents['b1']['pics'] = this.data.fileListB1
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB2(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB2: this.data.fileListB2.concat(res)
      });
      this.data.contents['b2']['pics'] = this.data.fileListB2
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB3(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB3: this.data.fileListB3.concat(res)
      });
      this.data.contents['b3']['pics'] = this.data.fileListB3
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB4(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB4: this.data.fileListB4.concat(res)
      });
      this.data.contents['b4']['pics'] = this.data.fileListB4
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB5(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB5: this.data.fileListB5.concat(res)
      });
      this.data.contents['b5']['pics'] = this.data.fileListB5
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB6(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB6: this.data.fileListB6.concat(res)
      });
      this.data.contents['b6']['pics'] = this.data.fileListB6
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB7(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB7: this.data.fileListB7.concat(res)
      });
      this.data.contents['b7']['pics'] = this.data.fileListB7
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB8(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB8: this.data.fileListB8.concat(res)
      });
      this.data.contents['b8']['pics'] = this.data.fileListB8
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB9(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB9: this.data.fileListB9.concat(res)
      });
      this.data.contents['b9']['pics'] = this.data.fileListB9
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadB10(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListB10: this.data.fileListB10.concat(res)
      });
      this.data.contents['b10']['pics'] = this.data.fileListB10
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadC1(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListC1: this.data.fileListC1.concat(res)
      });
      this.data.contents['c1']['pics'] = this.data.fileListC1
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadC2(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListC2: this.data.fileListC2.concat(res)
      });
      this.data.contents['c2']['pics'] = this.data.fileListC2
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadC3(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListC3: this.data.fileListC3.concat(res)
      });
      this.data.contents['c3']['pics'] = this.data.fileListC3
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadC4(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      //全部上传完毕
      this.setData({
        fileListC4: this.data.fileListC4.concat(res)
      });
      this.data.contents['c4']['pics'] = this.data.fileListC4
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadD1(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListD1: this.data.fileListD1.concat(res)
      });
      this.data.contents['d1']['pics'] = this.data.fileListD1
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadD2(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListD2: this.data.fileListD2.concat(res)
      });
      this.data.contents['d2']['pics'] = this.data.fileListD2
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadD3(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListD3: this.data.fileListD3.concat(res)
      });
      this.data.contents['d3']['pics'] = this.data.fileListD3
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadD4(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      //全部上传完毕
      this.setData({
        fileListD4: this.data.fileListD4.concat(res)
      });
      this.data.contents['d4']['pics'] = this.data.fileListD4
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadE1(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListE1: this.data.fileListE1.concat(res)
      });
      this.data.contents['e1']['pics'] = this.data.fileListE1
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadE2(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListE2: this.data.fileListE2.concat(res)
      });
      this.data.contents['e2']['pics'] = this.data.fileListE2
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadE3(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListE3: this.data.fileListE3.concat(res)
      });
      this.data.contents['e3']['pics'] = this.data.fileListE3
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadE4(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListE4: this.data.fileListE4.concat(res)
      });
      this.data.contents['e4']['pics'] = this.data.fileListE4
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadE5(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      //全部上传完毕
      this.setData({
        fileListE5: this.data.fileListE5.concat(res)
      });
      this.data.contents['e5']['pics'] = this.data.fileListE5
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadE6(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListE6: this.data.fileListE6.concat(res)
      });
      this.data.contents['e6']['pics'] = this.data.fileListE6
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadF1(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListF1: this.data.fileListF1.concat(res)
      });
      this.data.contents['f1']['pics'] = this.data.fileListF1
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadF2(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListF2: this.data.fileListF2.concat(res)
      });
      this.data.contents['f2']['pics'] = this.data.fileListF2
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadF3(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListF3: this.data.fileListF3.concat(res)
      });
      this.data.contents['f3']['pics'] = this.data.fileListF3
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadG1(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListG1: this.data.fileListG1.concat(res)
      });
      this.data.contents['g1']['pics'] = this.data.fileListG1
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadG2(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListG2: this.data.fileListG2.concat(res)
      });
      this.data.contents['g2']['pics'] = this.data.fileListG2
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadG3(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListG3: this.data.fileListG3.concat(res)
      });
      this.data.contents['g3']['pics'] = this.data.fileListG3
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadG4(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListG4: this.data.fileListG4.concat(res)
      });
      this.data.contents['g4']['pics'] = this.data.fileListG4
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadH1(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListH1: this.data.fileListH1.concat(res)
      });
      this.data.contents['h1']['pics'] = this.data.fileListH1
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadH2(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListH2: this.data.fileListH2.concat(res)
      });
      this.data.contents['h2']['pics'] = this.data.fileListH2
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadH3(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListH3: this.data.fileListH3.concat(res)
      });
      this.data.contents['h3']['pics'] = this.data.fileListH3
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadH4(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListH4: this.data.fileListH4.concat(res)
      });
      this.data.contents['h4']['pics'] = this.data.fileListH4
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  afterReadH5(event) {
    wx.showLoading({
      title: '上传中...'
    });
    const { file } = event.detail; //获取所需要上传的文件列表
    let uploadPromiseTask = []; //定义上传的promise任务栈
    for (let i = 0;i < file.length;i++) {
      uploadPromiseTask.push(this.uploadFile(file[i].path)) //push进每一张所需要的上传的图片promise栈
    }
    Promise.all(uploadPromiseTask).then(res => {
      
      
      //全部上传完毕
      this.setData({
        fileListH5: this.data.fileListH5.concat(res)
      });
      this.data.contents['h5']['pics'] = this.data.fileListH5
      wx.hideLoading()
    }).catch(error => {
      //存在有上传失败的文件
      wx.hideLoading();
      wx.showToast({
        title: '上传失败！',
        icon: 'none',
      })
    })
  },
  
  
  
  // beforeRead (e) {
  //   const {file, callback} = e.detail;
  //   this.setData({'uploadParams.filename': file[0].path})
  //   callback(true);
  // },
    deleteImg(event) {
    const delIndex = event.detail.index;
    const { fileList } = this.data;
    fileList.splice(delIndex, 1);
    this.setData({
      fileList
    })
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
          const data = JSON.parse(res.data);
          const url = data.data[0].Url;
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
});
