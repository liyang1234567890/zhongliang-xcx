// pages/mine/means/status/status.js
var util = require('../../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statu: ['粮点', '直属库', '贸易商', '经销商', '代理商', '面粉厂', '饲料厂', '淀粉厂', '米厂', '油厂', '养殖场', '粮库', '物流', '酒精厂', '粮油机械', '综合经营', '其他']
  },
  goReturn: function(e){
    var _this=this;
    wx.navigateBack();
    var index = e.currentTarget.dataset.id;
    wx.request({
      url: util.APP_HOST + 'wuser/insertwuser',
      method: 'POST',
      data:{
        identityStatus: _this.data.statu[index]
      },
      success: function(res){
        console.log(res.data)
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