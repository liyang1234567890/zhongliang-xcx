// pages/free/free.js

var util = require('../free/getTime.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
  swiper: [{
      "url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524133713957&di=7e9fa6df1a0f59d3992e0db09896507e&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fgm%2F2013%2F0715%2FU7241P115DT20130715145241.jpg"
    }, {
      "url": "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=3e99e2c2067b020813c939e152d8f25f/14ce36d3d539b6006a6cc5d0e550352ac65cb733.jpg"
    }],
  array: ['水果',
          '蔬菜',
          '禽畜蛋肉',
          '中药材',
          '种苗',
          '坚果干果',
          '农副',
          '粮油作物',
          '水产',
          '绿化苗木',
          '食用菌',
          '特种养殖',
          '经济作物',
          '花卉盆景',
  
  ],
  currentTab: 0,
  multiIndex: [0, 0, 0],
  date: '2016-09-01',
  time: '12:01',
  region: ['黑龙江'],
  customItem: '全部'
  

  },
 tosearch:function(){
    wx.navigateTo({
      url: '../free/search/search',
    })
 },
 toOrder:function(){
    wx.switchTab({
      url: '../order/order',
    })
  }, 
 bindRegionChange: function (e) {
   this.setData({
     region: e.detail.value
   })
 },
 bindPickerChange(e){
    this.setData({
      index: e.detail.value
    })
 },
 swichNav: function (e) {
   var that = this;
   if (this.data.currentTab === e.target.dataset.current) {
     return false;
   } else {
     that.setData({
       currentTab: e.target.dataset.current,
     })
   }
 },
 swiperChange: function (e) {
   this.setData({
     currentTab: e.detail.current,
   })

 }, 
 toBuy:function(){
  wx.navigateTo({
    url: '../free/buy/buy',
  })
 }, 
 toSellers:function(){
   wx.navigateTo({
     url: '../free/sellers/sellers',
   })
 },
 toPublish:function(){
    wx.navigateTo({
      url: '../free/publish/publish',
    })
 },
 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      time: time
    });  
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
  
  },
  

})