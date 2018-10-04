// pages/free/buy/buy.js
var util = require('../../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pic.58pic.com/58pic/15/40/44/44J58PIC2Hm_1024.jpg',

      'http://pic.qiantucdn.com/58pic/19/62/31/48D58PICGgM_1024.jpg',

'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524479621962&di=755b8bad398774eab4f69864b59972e5&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110929%2F83-11092910553335.jpg',

'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524479655948&di=e6c227564f612c598243f1266b305f62&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D684096700%2C3590060017%26fm%3D214%26gp%3D0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    hourMinute: ''
  },
  //拨打客服电话
  callService: function () {
    wx.makePhoneCall({
      phoneNumber: '400-400-XXXX',
    })
  },

  //拨打卖家电话
  callSeller: function () {
    wx.makePhoneCall({
      phoneNumber: '188-0463-8781'
    })
  },
  points: function () {
    wx.showModal({
      title: '',
      content: '请确认订单是否完成',
      success:function(res){
        if(res.confirm){
          wx.navigateTo({
            url: '../integral/integral',
          })
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据 
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var hourMinute = hour + ':' + minute;
    this.setData({
      time: time,
      hourMinute: hourMinute
    }); console.log(this.data.hourMinute)
    wx.getStorage({
      key: 'key',
      success: function(res) {
        that.setData({
          dataDetail:res.data
        })
      },
    })
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