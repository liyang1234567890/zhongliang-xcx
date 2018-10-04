// pages/order/order.js
var util = require('../../utils/util');
Page({
  /**
   * 页面的初始数据
   */
  data: {
// 选项卡
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0, 
// 选项卡结束
    data: [],
    datanew: [],
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    bol: true,
    boll: true,
    region: ['选择地区'],
    cata: ['选择品类', '玉米', '大豆', '水稻', '小麦', '高粱'],
    customItem: '选择地区',
    index: 0,
    status: 0,//状态码,
    explode: []//截取
  },
  // 立即注册跳转
  regnow: function () {
    wx.navigateTo({
      url: 'dredge/dredge',
    })
  },
  close: function () {
    var bol = this.data.bol;
    this.setData({
      bol: !bol
    })
  },
  // 选项卡
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }  ,
  // 选项卡end
  change: function () {
    var boll = this.data.boll;
    this.setData({
      boll: !boll
    })
  },
  //选择地区
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
    var that = this;
    console.log(this.data.region[1].substr(0, this.data.region[1].length - 1));
    if (this.data.region[2] == '选择地区') {
      if (this.data.region[1] == '选择地区') {
        wx.request({
          url: util.APP_HOST + 'torder/getallbyplace?orderId=1000' + e.target.dataset.set,
          success: function (res) {
            that.setData({
              data: res.data.torders,
              datanew: res.data.tborder,
            })
          }
        })
      } else if (this.data.region[1] != '选择地区') {
        wx.request({
          url: util.APP_HOST + 'torder/getallbyplace?concludeSignPlace=' + this.data.region[1].substr(0, this.data.region[1].length - 1),
          success: function (res) {
            that.setData({
              data: res.data.torders,
              datanew: res.data.tborder,
            })
          }
        })
      }
    }
  },
  // 选择品类
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    console.log(this.data.cata[this.data.index])
  },
  // 未注册跳转注册页面
  undredgeShowOrder: function () {
    wx.navigateTo({
      url: '../rich/login/login'
    })
  },
  //已注册查看详细
  dredgeShowOrder: function (e) {
    wx.navigateTo({
      url: 'showOrder/showOrder?id=' + e.target.dataset.set + '&&' + 'region=' + this.data.data[e.target.dataset.set - 1].concludeSignPlace + '&&' + 'farelock1=' + this.data.data[e.target.dataset.set - 1].farelock1
    })
  },
  // 开通订单买卖
  open: function () {
    wx.navigateTo({
      url: '../rich/login/login',
    })
  },
  onShow: function () {
    // wx.removeStorage({//清除缓存
    //   key: 'flag',
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
    var that = this;
    wx.getStorage({
      key: 'flag',
      success: function (res) {
        console.log(res.data)
        that.setData({
          status: res.data
        })
      },
    })
    wx.request({
      url: util.APP_HOST + "torder/getallbyplace?id=1",
      success: function (res) {
        console.log(res.data)
        that.setData({
          data: res.data.torders,
          datanew: res.data.tborder,
          explode: res.data.tborder.orderType.substr(0, 2)
        })
      }
    })
  }
})

