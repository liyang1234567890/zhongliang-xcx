// pages/free/buy/buy.js
var util = require('../../../utils/util.js');
var app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    // 页面数据
    product_detail_name:"玉米",
    product_detail_price:'￥1400元/吨',
    message_type:'东北玉米',
    message_count:'2000kg',
    message_site:'黑龙江省 哈尔滨市宁安县',
    message_size:'自然干玉米水分14，霉变0.5，容重760',

    //推荐数据
    category_left_name:"玉米",
    category_right: "￥1700元/ 吨",
    category_left_type:"东北玉米",
    category_left_site:"黑龙江省香坊区",
    category_left_count:"800吨",
    category_left_size:"水分2.0",

    category_left_name1: "小麦",
    category_right1: "￥1000元/ 吨",
    category_left_type1: "南方小麦",
    category_left_site1: "湖南省长沙",
    category_left_count1: "670吨",
    category_left_size1: "水分1.8",



// 轮播图图片
imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    hourMinute:''  },



  //拨打客服电话
  callService:function(){
    wx.makePhoneCall({
      phoneNumber: '400-400-XXXX',
    })
  },

  //拨打卖家电话
  callSeller:function(){
    wx.makePhoneCall({
      phoneNumber:'188-0463-8781'
    })
  },
  points:function(){
    wx.showModal({
      title: '',
      content: '请确认订单是否完成',
      success: function (res) {
        if (res.confirm) {
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
 // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据 
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes() ;
    var hourMinute = hour +':'+ minute;
    this.setData({
      time: time,
      hourMinute : hourMinute
    });      console.log(this.data.hourMinute)
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