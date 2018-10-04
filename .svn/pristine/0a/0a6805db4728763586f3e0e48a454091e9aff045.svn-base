// pages/mine/meanSet/meanSet.js

Page({
  data: {
    login: ''
  },
  clearCache:function(){
    wx.showModal({
      title: '是否清空缓存',
      content: '缓存清除后将会退出小程序',
      success: function(res){
        if(res.confirm){
          wx.clearStorage();
          wx.navigateTo({
            url: '../../index/index',
          })
        }
      }
    })
  },
  logout: function () {
    wx.showModal({
      title: '注销账号',
      content: '是否退出当前账号',
      confirmColor: '#1AAD19',
      success: function(res){
        if(res.confirm){
          wx.removeStorageSync("flag");
          wx.navigateBack();
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var login = wx.getStorageSync("flag");
    if(login=="yes"){
      this.setData({
        login: true
      })
    }else{
        this.setData({
            login: false
        })
    }
    console.log(this.data.login);
  }
})