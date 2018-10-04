var util = require('../../utils/util');
Page({
  data: {
    helpdata: {},
    choice:'',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  change: function () {
    wx.navigateTo({
      url: '../help/helpmore/helpmore',
    })
  },
  showMore: function () {
    wx.navigateTo({
      url: '../help/showMore/showMore'

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: util.APP_HOST + 'wpovertypolicy/getallwpovertypolicy',
      success: function (res) {
        that.setData({
          helpdata: res.data.page.list
        });
        console.log(that.data.helpdata);
      }
    })
  }
})