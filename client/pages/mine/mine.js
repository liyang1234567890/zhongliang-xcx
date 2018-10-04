var util = require('../../utils/util.js');
var openid = '';
var login = '';
Page({
  data: {
    openid: '',
    id: '',
    status: '',
    wuser:[],
    login: false,
    num:'',
    tnum:''
  },

  ToPubInfo: function () {
    wx.navigateTo({
      url: "pubInfor/pubInfor",
    })
  },

  goWuyang: function () {
    var that = this;   
    wx.navigateTo({
      url: '../order/dredge/dredge',
    })
  },

  gogoWuyang: function () {
    var that = this;
    wx.navigateTo({
      url: '../order/dredge/dredge',
    })
  },

  phoneUs: function () {
    wx.makePhoneCall({
      phoneNumber: '0451-55580111',
    })
  },

  onLoad: function (options) {
    openid = wx.getStorageSync("openid");
    var that=this;
    console.log(openid);
    wx.request({
      url: util.APP_HOST + 'wuser/selectwuserbyuserid?openid=' +openid,
      success(res){
        console.log(res.data.wuser)
        that.setData({
          wuser: res.data,
          openid:openid,
          num: res.data.wuser[0].serviceAuthority,
          tnum: res.data.wuser[0].touristIdentity,
        });
        console.log(that.data.tnum);
      }
    })
  },
  
  onShow: function(){
    openid = wx.getStorageSync("openid");
    var that = this;
    console.log(openid);
    wx.request({
      url: util.APP_HOST + 'wuser/selectwuserbyuserid?openid=' + openid,
      success(res) {
        console.log(res.data.wuser)
        that.setData({
          wuser: res.data,
          openid: openid,
          num: res.data.wuser[0].serviceAuthority,
          tnum: res.data.wuser[0].touristIdentity,
        });
        console.log(that.data.tnum);
      }
    })
    
    login = wx.getStorageSync("flag");
    
    // 判断是否登录
    if (login == "yes") {
      this.setData({
        login: true
      })
    } else{
      this.setData({
        login: false
      })
    }
  },
  isLogin: function(){
    var login = wx.getStorageSync("flag");
    if(login){
      return true;
    }else{
      wx.showModal({
        title: '请先登录',
        content: '',
      })
      return false;
    }
  }
})