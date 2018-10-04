//publish.js
const app = getApp()
Page({
  data: {
    multiIndex: [0, 0, 0],
    region: ['省', '市', '区/县'],
    customItem: '全部',
    tempFilePaths:[],


    array: ['我要收购', '我要出售'],
    index: 0,
    typeArray: ['水果', '蔬菜', '禽畜牧蛋肉', '中药材', '种苗', '坚果干果', '农副/副食', '粮油作物', '水产', '绿化苗木', '食用菌', '特种养殖', '经济作物', '花卉盆景'],
    typeIndex: 0,
    imgArray: '',
  },

  /* button交互/跳转 */
  formSubmit: function (data) {
    wx.navigateBack({
      url: '../free',
    })
  
    var that = this;
    console.log("");
    var typ = data.detail.value.ser;
    var category = this.data.typeArray[data.detail.value.typ];
    var region = data.detail.value.region;
    var amount = data.detail.value.count;
    var standard = data.detail.value.spec;
    var price = data.detail.value.price;
    var unit = data.detail.value.unit;
    var place = data.detail.value.place;
    var brand = data.detail.value.brand;
    // var user_oid = data.openid;
    var params = {
      "type":typ,
      "category":category,
      "amount":amount,
      "region":region,
      "standard":standard,
      "price":price,
      "unit":unit,
      "place":place,
      "brand":brand,
      // "user_oid":user_oid,
    };
    wx.request({
      url: 'http://39.107.253.90:60001/freebusiness/save?user_oid=' + that.data.openid,
      method: "POST",
      data: params,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
       console.log(JSON.stringify(res.data));
      }
    })
    
    /* 上传图片 */
    if(that.data.imgArray!=''){
      console.log(that.data.imgArray[0])
      var address = that.data.imgArray[0];
      wx.uploadFile({
        url: 'http://39.107.253.90:60001/freebusiness/save',
        filePath: address,
        name: 'file',
        formData: {
          'user': 'test'
        },
        success: function (res) {
          var data = res.data
          //do something
        }
      })
    }
  },

  /* 品类picker */
  bindPickerChange: function (data) {
    console.log(data.detail.value)
    this.setData({
      index: data.detail.value
    })
  },

  /* 选择服务picker */
  bindPickerChange2: function (data) {
    console.log(data.detail.value)
    this.setData({
      typeIndex: data.detail.value
    })
  },


  /* 省市区选择器 */
  bindRegionChange: function (data) {
    console.log(data.detail.value)
    this.setData({
      region: data.detail.value
    })
  },

  /* 获取图片 */
  getImage: function () {
    var that = this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      success: function (res) {
        //do sth
        console.log(res.tempFilePaths)
        console.log(res)
        that.setData({
          imgArray: res.tempFilePaths
        })
      }
    })
  },

  // 获取openid和session key
  getOpenId: function (data) {
    var that = this
    wx.login({
      success: function (res) {
        //发送code换取openId, sessionKey
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx10031d2233afbcba&secret=759c54e1f897391b2f9bfb07a0fb66fd&js_code=' + res.code + '&grant_type=authorization_code',
            data: {
            },
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              console.log(res)
              console.log(res.data.openid)
              console.log(res.data.session_key)
              that.setData({
                openid:res.data.openid
              })
            },
            fail: function (res) {
              console.log('获取openId、sessionKey失败！' + res.errMsg)
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
})
