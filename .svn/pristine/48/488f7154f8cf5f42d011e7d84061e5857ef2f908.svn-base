// pages/free/integral/integral.js
var util = require('../../../utils/util.js'); 
var openid = wx.getStorageSync("openid")
console.log(openid)
Page({
  data: {
    total:'',
    // openid:"",
  },
  onLoad:function(){
    var that = this;

    wx.request({
      url: util.APP_HOST + `my/mypoint?user_oid=${openid}`,     
      success:function(res){
        that.setData({
          total:res.data.myPoint
        })
        console.log(res)
        console.log(that.data.total);
      }
    })
  }
})