// pages/free/free.js

var iutil = require('../../utils/util.js');
var util = require('../free/getTime.js')
// var appInstance = getApp()
// console.log(appInstance.globalData.openid) 
Page({

  /**
  * 页面的初始数据
  */
  data: {
    newArr: [],
    dataFree: [],
    dataH: [],
    freeBusinessesList: [],
    swiper: [{
      "url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524479692029&di=12b6f1843b0a4dd0c66bf4e4e40b86e0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Ddf48815fa7345982d187edd1649d5bd8%2Fb3b7d0a20cf431ad837a56124136acaf2edd9874.jpg"
    }, {
      "url": "http://pic.58pic.com/58pic/15/39/36/99j58PICCF7_1024.jpg"
    }, {
      "url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524479796086&di=32b72341eb4dd52d76d4550eb9257ec3&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140818%2F0035035646153001_b.jpg"
    }],
    array: [],
    currentTab: 0,
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['黑龙江'],
    customItem: '全部',
    freeBusinessesList: [],
    history: [],
    openid: '',
    fb_id: "",
    multiArray: [[], []],
    multiIndex: [0, 0, 0],

  },
  onLoad: function (options) {

    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据 
    this.setData({
      time: time
    });
    var that = this;
    wx.request({
      url: iutil.APP_HOST + '/freebusiness/findfreebus',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data),
          that.setData({
            freeBusinessesList: res.data.freeBusinessesList.reverse(),
          }),
          console.log(res.data.freeBusinessesList)
      }
    });
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    var that = this;
    wx.request({
      url: iutil.APP_HOST + '/category/findall?level=1',
      success: function (res) {
        // console.log(res.data.categoryList);
        var arrays = res.data.categoryList;
        var array = [];
        for (var i in arrays) {
          array.push(arrays[i]['category_name']);
        }
        data.multiArray[0] = array;
      }

    }),
      // 默认
      wx.request({
        url: iutil.APP_HOST + '/category/findbyparent?category_name=水果',
        success: function (res) {
          var arrays = res.data.categoryList;
          var array = [];
          for (var i in arrays) {
            array.push(arrays[i]['category_name']);
          }
          data.multiArray[1] = array;
          that.setData(data);
        }
      })

  },
  tosearch: function () {
    wx.navigateTo({
      url: '../free/search/search',
    })
  },
  toOrder: function () {
    wx.switchTab({
      url: '../order/order',
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    var currentIndex = e.detail.value[1];
    var category = this.data.multiArray[1][currentIndex];
    var that = this;
    wx.request({
      url: iutil.APP_HOST + '/freebusiness/findfreebus?category=' + category,
      success: function (res) {
        that.setData({
          freeBusinessesList: res.data.freeBusinessesList
        })
        // console.log(that.data.freeBusinessesList)
      }
    })
  },
  bindMultiPickerColumnChange: function (e) {
    // console.log(e.detail.column);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    if (e.detail.column == 0) {
      var that = this;
      var category = data.multiArray[0][e.detail.value];
      // console.log(category);
      wx.request({
        url: iutil.APP_HOST + '/category/findbyparent?category_name=' + category,
        success: function (res) {
          var arrays = res.data.categoryList;
          var array = [];
          for (var i in arrays) {
            array.push(arrays[i]['category_name']);
          }
          data.multiArray[1] = array;
          that.setData(data);
        }
      })
    }
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
    if (e.target.dataset.current == 2) {
      wx.request({
        url: iutil.APP_HOST + `my/findhis?user_oid=${that.data.openid}`,
        success: function (res) {
          that.setData({
            history: res.data.freeBusinessesList
          })
        }
      })
    }
  },
  swiperChange: function (e) {
    var that = this;
    this.setData({
      currentTab: e.detail.current,

    })
    if (e.detail.current == 2) {
      wx.request({
        url: iutil.APP_HOST + `my/findhis?user_oid=${that.data.openid}`,
        success: function (res) {
          that.setData({
            history: res.data.freeBusinessesList
          })
          console.log(res.data.freeBusinessesList)
        }
      })
    }

  },
  toBuy: function (e) {
    var that = this;
    wx:wx.setStorage({
      key: 'key',
      data: that.data.freeBusinessesList[e.currentTarget.dataset.history]
    })
    that.setData({
      fb_id: e.currentTarget.dataset.id
    })
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx10031d2233afbcba&secret=759c54e1f897391b2f9bfb07a0fb66fd&js_code=${res.code}&grant_type=authorization_code`,
            success: function (res) {
              that.setData({
                openid: res.data.openid
              })
              console.log(res.data.openid)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    }),
      wx.request({
        url: iutil.APP_HOST + `my/hissave?fb_id=${that.data.fb_id}&user_oid=${that.data.openid}`,
        method: 'POST',
        dataType: "JSON",
      })
    wx.navigateTo({
      url: '../free/buy/buy',
    })
  },
  toSellers: function (e) {
    var that = this;
    wx: wx.setStorage({
      key: 'key',
      data: that.data.freeBusinessesList[e.currentTarget.dataset.history]
    })
    that.setData({
      fb_id: e.currentTarget.dataset.id
    })
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx10031d2233afbcba&secret=759c54e1f897391b2f9bfb07a0fb66fd&js_code=${res.code}&grant_type=authorization_code`,
            success: function (res) {
              that.setData({
                openid: res.data.openid
              })
              console.log(res.data.openid)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    }),
      wx.request({
        url: iutil.APP_HOST + `my/hissave?fb_id=${that.data.fb_id}&user_oid=${that.data.openid}`,
        method: 'POST',
        dataType: "JSON",
        success:function(res){
          console.log(res)
        }
      })

    wx.navigateTo({
      url: '../free/sellers/sellers',
    })
  },
  toPublish: function () {
    wx.navigateTo({
      url: '../free/publish/publish',
    })
  }

})