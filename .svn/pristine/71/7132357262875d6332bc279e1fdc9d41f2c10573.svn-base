// pages/mine/category/cateSub/cateSub.js
var util = require('../../../../utils/util.js');
Page({
  data: {
    sub: []
  },
  onLoad: function (options) {
    var category_id = options.category_id
    var that = this
    wx.request({
      url: util.APP_HOST + 'category/findall?level=2&parent_id=' + category_id,
      method: 'get',
      success: function (res) {
        // console.log(res.data.categoryList)
        that.setData({
          sub: res.data.categoryList
        })
        // 修改页面标题
        wx.setNavigationBarTitle({
          title: options.category_name
        })
      }
    })
    
  }
})