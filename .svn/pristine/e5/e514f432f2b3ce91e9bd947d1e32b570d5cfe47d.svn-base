// pages/rich/search/search.js
Page({
  data:{
    keyWord:''
  },
  keyInput:function(e){
    this.setData({
    keyWord: e.detail.value
    })
    
  },
  search:function(){
    wx.setStorageSync('keyWord', this.data.keyWord);
    console.log(this.data.keyWord)
      wx.navigateTo({
          url: '../look/look',
      })
  }
})