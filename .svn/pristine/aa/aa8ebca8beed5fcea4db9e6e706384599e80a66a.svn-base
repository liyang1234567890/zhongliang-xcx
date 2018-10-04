// pages/mine/means/means.js
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: ''//图片路径 
  }, 
  goWuyang: function () {
    wx.showModal({
      title: '跳转到',
      content: '无央平台注册/登录',
      cancelText: '返回',
      confirmColor: '#1AAD19'
    })
  },
  
  goPhoto: function(){
    var _this = this;
    //上传照片
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        wx.uploadFile({
          url: 'http://39.107.253.90:60001/wuser/insertwuser', 
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            userId: 1,
            headPortrait: tempFilePaths[0]
          },
          success: function (res) {
            console.log(res.data);
          }

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        // _this.setData({
        //   tempFilePaths: res.tempFilePaths
        // })
        // console.log(res.tempFilePaths);
        // wx.request({
        //   url: util.APP_HOST + 'wuser/insertwuser',
        //   method: 'POST',
        //   data: {
        //     userId: 1,
        //     headPortrait: _this.data.tempFilePaths
        //   },
        //   success: function(res){
        //     console.log(res.data);
        //   }
        })
      }
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})