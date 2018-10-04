//publish.js
//获取应用实例
const app = getApp()

Page({
  data: {
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',

    /* 选择服务picker */
    array: ['我要收购', '我要出售'],
    index: 0,
    typeArray: ['水果', '蔬菜', '禽畜牧蛋肉', '中药材', '种苗', '坚果干果', '农副/副食', '粮油作物', '水产', '绿化苗木', '食用菌', '特种养殖', '经济作物', '花卉盆景'],
    typeIndex: 0,
    imgArray: []
  },

  /* button跳转 */
  toFree: function () {
    wx.navigateBack({
      url: '../free',
    })
  },

  /* 品类picker */
  bindPickerChange: function (data) {
    this.setData({
      index: data.detail.value
    })
  },

  /* 选择服务picker */
  bindPickerChange2: function (data) {
    this.setData({
      typeIndex: data.detail.value
    })
  },


  /* 省市区选择器 */
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },


  formSubmit: function (data) {
    console.log('提交数据为：', data.detail.value)
    console.log('服务：', this.data.array[data.detail.value.ser])
    console.log('品类：', this.data.typeArray[data.detail.value.type])
    var ser = this.data.array[data.detail.value.ser];
    var typ = this.data.array[data.detail.value.ser];
    var count = data.detail.value.count;
    var place = data.detail.value.place;
    var spec = data.detail.value.spec;
    console.log('pic:', this.data.imgArray[0])
    //有图片路径就可以上传了
    // wx.uploadFile({
    //   url: 
    //   filePath: tempFilePaths[0],
    //   name: 'file',
    //   formData: {
    //     'user': 'test'
    //   },
    //   success: function (res) {
    //     var data = res.data
    //     //do something
    //   }
    // })

  },

  /* 获取图片 */
  getImage: function () {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      success: function (res) {
        //do sth
        console.log(res.tempFilePaths)
        console.log(res)
        that.setData({
          imgArray: that.data.imgArray.concat(res.tempFilePaths)
        })
      }
    })
  },

  /* 获取视频 */
  getVideo: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  }
})