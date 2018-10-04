// pages/order/dredge/dredge.js
var util = require('../../../utils/util.js');
var arrAreas = [];
var index = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    identifyingName: '',
    farmlandValue: '',
    farmlandTypeValue: '',
    ridgeFarmlandValue: '',
    farmlandNameValue: '',
    farmlandName:'',


    region: ['黑龙江省', '哈尔滨市', '南岗区'],
    customItem: '全部',
    array: ['玉米', '小麦', '水稻', '高粱', '小米', '大豆', '花生', '大米', '精品玉米'],
    Company: ['小亩', '垧', '大亩'],
    Companyindex: 0,
    currentTab: 1,
    openid: '',
    name: '',//姓名
    phone: '',//手机号
    choice: '',//选择地区
    address: '',//详细地址
    currentTime: '60',//验证码倒计时
    time: '获取验证码',//说明
    identifying: '',//输入的验证码
    saveCode: '',//返回的验证码
    areaname: '',//地区名称
    provincesCode: null,//省编码
    citysCode: null,//市编码
    areas: null,//区对象
    areasCode: null//区编码
  },
  bindRegionChange: function (e) {
    var that = this;
    this.setData({
      region: e.detail.value
    })
  },
  bindCompanyChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Companyindex: e.detail.value
    })
  },
  now: function () {
    wx.navigateBack({})
  },
  //获取输入的值
  nameValue: function (e) { this.setData({ name: e.detail.value }) },
  phoneValue: function (e) { this.setData({ phone: e.detail.value }) },
  addressValue: function (e) { this.setData({ address: e.detail.value }) },
  identifyingValue: function (e) { this.setData({ identifying: e.detail.value }) },
  identifyingName: function (e) { this.setData({ identifyingName: e.detail.value }) },
  farmlandValue: function (e) { this.setData({ farmlandValue: e.detail.value }) },
  farmlandTypeValue: function (e) { this.setData({ farmlandTypeValue: e.detail.value }) },
  ridgeFarmlandValue: function (e) { this.setData({ ridgeFarmlandValue: e.detail.value }) },
  farmlandNameValue: function (e) { this.setData({ farmlandNameValue: e.detail.value }) },
  farmlandName: function (e) { this.setData({ farmlandName: e.detail.value }) },





  //省市县编码
  OnMyEvent: function (e) {
    var that = this;
    this.setData({
      areaInfo: e.detail,
      areaname: e.detail.areaname,
      provincesCode: e.detail.provincesCode,
      citysCode: e.detail.citysCode,
      areas: e.detail.areas
    })
  },
  // 种植企业注册
  submitPlant: function () {
    console.log(this.data.openid)
    var that = this;
    
    if (this.data.phone == '' || this.data.identifying == '') {//验证输入为空
      wx.showModal({
        title: '手机号或验证码为空',
        content: '请重新输入',
        showCancel: false//不显示取消按钮
      })
    } else {
      wx.request({
        url: util.APP_HOST + 'wuser/updatewuser',
        data: {
          openid: that.data.openid,//openid       
          tel: that.data.phone,//联系电话
          serviceAuthority: '1'
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          wx.setStorage({
            key: 'flag',
            data: res.data.status
          })
          if (that.data.identifying == that.data.saveCode) {//判断输入的验证码与接口返回的验证码的值是否相同

            wx.request({
              url: util.APP_HOST + 'wuser/updatewuser',
              data: {
                openid: that.data.openid,//openid   
                touristIdentity:"1",
                realname: that.data.identifyingName,
                tel: that.data.phone,
              },
              method: 'POST',
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              success: function (res) {
                console.log(res);
                if (res.data.errmess == "修改成功") {
                  wx.request({
                    url: util.APP_HOST + 'tland/inserttland',
                    data: {
                      owner: that.data.identifyingName,
                      telNum: that.data.phone,
                      croplandName: that.data.farmlandValue,
                      styleIds: that.data.farmlandTypeValue,                     
                      acreage: that.data.farmlandNameValue,                      
                      acreageUnit: that.data.Company[that.data.Companyindex],
                      ridgingSpacing: that.data.ridgeFarmlandValue,             
                      address: that.data.region.join("-"),                      
                    },
                    method: 'POST',
                    success: function (res) {
                      console.log(res)

                        if (res.data.errmess == "增加成功") {
                          that.setData({
                            newflag: res.data.status
                          })
                          wx.showModal({
                            title: '注册成功',
                            content: '',
                            success: function (res) {
                          wx.navigateTo({//点击确定的操作
                            url: '../../rich/login/login',
                            success: function () {
                              var page = getCurrentPages().pop();
                              if (page == undefined || page == null) {
                                page.onShow();
                              }
                            }
                          })
                              // wx.switchTab({
                              //   url: '../../rich/login/login',
                              //   success: function (e) {
                              //     var page = getCurrentPages().pop();
                              //     if (page == undefined || page == null) {
                              //       page.onShow();
                              //     }
                              //   }
                              // })
                            }
                          })

                        }

                    }
                  })

                } else {
                  wx.showToast({
                    title: '注册失败',
                    icon: 'none'
                  })
                }
              }
            });


          } else {//验证码验证失败的操作
            wx.showModal({
              title: '验证码输入错误',
              content: '请重新输入',
              showCancel: false,//不显示取消按钮
              success: function () {
                that.setData({
                  phone: '',
                  identifying: ''
                })
              }
            })
          }
        }
      })
    }











   
    
   
  },
  //无央会员注册
  submit: function () {
    // for (var i = 0; i < this.data.areas.length; i++) {
    //   arrAreas.push(this.data.areas[i].code)
    //   if (this.data.areas[i].name == this.data.areaname){
    //     index = arrAreas[i]
    //   }
    // }    
    var that = this;
    // if (this.data.name == ''){
    //   wx.showModal({
    //     title: '输入姓名为空',
    //     content: '请重新输入',
    //     showCancel: false//不显示取消按钮
    //   });
    // } else 
    if (this.data.phone == '') {
      wx.showModal({
        title: '输入手机号为空',
        content: '请重新输入',
        showCancel: false//不显示取消按钮
      });
      // } else if (this.data.address == ''){
      //   wx.showModal({
      //     title: '输入地址为空',
      //     content: '请重新输入',
      //     showCancel: false//不显示取消按钮
      //   });
    } else {
      wx.request({
        url: util.APP_HOST + 'wuser/updatewuser',
        data: {
          openid: that.data.openid,//openid        
          // username: that.data.name,//用户名
          tel: that.data.phone,//联系电话
          // detailedAddress: that.data.address,//详细地址
          // region1: that.data.provincesCode,//省编码
          // region2: that.data.citysCode,//市编码
          // region3: index,//区编码
          ismember: "1"
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: function (res) {
          console.log(res);
          if (res.data.errmess == "修改成功") {
            that.setData({
              newflag: res.data.status
            })
            wx.showToast({
              title: '注册成功',
              icon: "success"
            })
            wx.navigateTo({//点击确定的操作
              url: '../../rich/login/login',
              success: function () {
                var page = getCurrentPages().pop();
                if (page == undefined || page == null) {
                  page.onShow();
                }
              }
            })
          } else {
            wx.showToast({
              title: '注册失败',
              icon: 'none'
            })
          }
        }
      });
    }
  },
  auth: function () {//发送验证码
    var that = this;
    if (this.data.phone.length == 11) {
      wx.request({
        url: util.APP_HOST + 'customer/getVerifyCode',
        data: {
          phoneNumbers: that.data.phone
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            saveCode: res.data.verifyCode
          })
        }
      })
      var currentTime = that.data.currentTime;
      that.setData({
        time: ' 倒计时' + currentTime + '秒'
      })
      var timer = setInterval(function () {
        that.setData({
          time: ' 倒计时' + (currentTime - 1) + '秒'
        })
        currentTime--;
        if (currentTime <= 0) {
          clearInterval(timer)
          that.setData({
            time: '重新获取',
            currentTime: 60,
          })
        }
      }, 1000)
    } else {
      wx.showToast({
        title: '手机号错误',
      })
    }
  },
  //贸易商注册
  submitMerchant: function () {
    var that = this;
    if (this.data.phone == '' || this.data.identifying == '') {//验证输入为空
      wx.showModal({
        title: '手机号或验证码为空',
        content: '请重新输入',
        showCancel: false//不显示取消按钮
      })
    } else {
      wx.request({
        url: util.APP_HOST + 'wuser/updatewuser',
        data: {
          openid: that.data.openid,//openid       
          tel: that.data.phone,//联系电话
          serviceAuthority: '1'
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          wx.setStorage({
            key: 'flag',
            data: res.data.status
          })
          if (that.data.identifying == that.data.saveCode) {//判断输入的验证码与接口返回的验证码的值是否相同
            wx.showModal({
              title: '注册成功',
              content: '',
              success: function (res) {
                wx.switchTab({
                  url: '../order',
                  success: function (e) {
                    var page = getCurrentPages().pop();
                    if (page == undefined || page == null) {
                      page.onShow();
                    }
                  }
                })
              }
            })
          } else {//验证码验证失败的操作
            wx.showModal({
              title: '验证码输入错误',
              content: '请重新输入',
              showCancel: false,//不显示取消按钮
              success: function () {
                that.setData({
                  phone: '',
                  identifying: ''
                })
              }
            })
          }
        }
      })
    }
  },
  swichTab: function (e) {//查看详细显示相应数据信息
    var current = e.target.dataset.current;
    this.setData({
      currentTab: current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.address = this.selectComponent("#address");
    // this.address.gps();
    // this.address.init();
    //获取openid
    var openid = wx.getStorageSync("openid");
    this.setData({
      openid: openid
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})