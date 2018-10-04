// pages/mine/recIntent/recIntent.js
var util = require('../../../utils/util.js');
Page({
  data: {
    intentions: [],
    goods: []
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: util.APP_HOST + 'my/findintention?user_oid=12345678',
      method: 'get',
      success: function (res) {
        console.log(res.data.freeBusinessesList)
        that.setData({
          intentions: res.data.freeBusinessesList
        })
      }
    })
  }
})