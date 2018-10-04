// pages/order/showOrder/showOrder.js
var util = require('../../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],//通过合作社id得到社员信息
    dataNum: [],//根据订单编号查询的信息
    region: '',
    farelock1: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.options)
    var that = this;
    wx.request({
      url: util.APP_HOST + 'torder/selectbycooid?departmentId4=' + options.id,
      success: function(res){
        that.setData({
          data: res.data.users,
          region: options.region,
          farelock1: options.farelock1
        })
      }
    })
    wx.request({
      url: util.APP_HOST + 'torder/selectallaboutorder?orderId=1000' + options.id,
      success: function(res){
        that.setData({
          dataNum: res.data
        })
      }
    })
  }
})