// pages/mine/means/personal/personal.js
var util = require('../../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    detailed: '',
    region: ['黑龙江', '哈尔滨', '香坊区'],
    customItem: '全部',
    place: ''
  },
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  } ,
  sendMsg:function(){
    wx.showToast({
      title: '提交成功',
    })
  },
  cityCancel: function () {
    this.address.cityCancel()
  },
  citySure: function () {
    this.address.citySure()
    console.log(this.address.data)    
  },
  selectDistrict: function () {
    this.address.selectDistrict()
  },
  cityChange() {
    this.address.cityChange()
  },
  saveName: function(e){
    this.setData({
      name: e.detail.value
    })
    // console.log(this.data.name);
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
    // console.log(this.data.region);
  },
  savePlace: function(e){
    this.setData({
      place: e.detail.value
    })
    // console.log(this.data.place);
  },
  logout: function(){
    var _this=this;
    wx.request({
      url:'http://39.107.253.90:60001/wuser/insertwuser',
      method: 'POST',
      data:{
        userId: 2,
        detailedAddress: _this.data.place,
        username: _this.data.name,
      },
      success: function(res){
        console.log(res.data);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.address = this.selectComponent("#address")
    this.address.onon()
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