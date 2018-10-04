// pages/order/order.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
      data:[],
      multiIndex: [0, 0, 0],
      date: '2016-09-01',
      time: '12:01',
      bol:true,
      boll:true,
      isflag:true,
      region: ['选择地区'],
      cata: ['选择品类', '玉米', '大豆', '水稻', '小麦', '高粱'],
      customItem: '选择地区',
      index: 0,
      orderym:[
        {
          "ym":"玉米订单",
          "zl":"中粮订单",
          "dq":"牡丹江合作社",
          "pl":"玉米",
          "cl":"12000吨/亩"
        },
        {
          "ym":"玉米订单",
          "zl":"中粮订单",
          "dq":"牡丹江合作社",
          "pl":"玉米",
          "cl":"12000吨/亩"
        },
        {
          "ym":"玉米订单",
          "zl":"中粮订单",
          "dq":"牡丹江合作社",
          "pl":"玉米",
          "cl":"12000吨/亩"
        },
        {
          "ym":"玉米订单",
          "zl":"中粮订单",
          "dq":"牡丹江合作社",
          "pl":"玉米",
          "cl":"12000吨/亩"
        },
        {
          "ym":"玉米订单",
          "zl":"中粮订单",
          "dq":"牡丹江合作社",
          "pl":"玉米",
          "cl":"12000吨/亩"
        }
      ],
      category:[
        '玉米',
        '小麦',
        '水稻',
        '大豆'
      ],
      currentId:0
    },
    // 未登录弹层
    closesubmask: function () {
      var isflag = this.data.isflag;
      this.setData({
        isflag: !isflag
      })
    },
    // 立即注册跳转
    regnow: function () {
      wx.navigateTo({
        url: 'dredge/dredge',
      })
    },
    selectKind:function(e){ 
      
      this.setData({
          currentId:e.currentTarget.dataset.id
          
        })
        
      },
    close: function(){
      var bol = this.data.bol;
      this.setData({
        bol:!bol
      })
    },
    change: function(){
      var boll = this.data.boll;
      this.setData({
        boll:!boll
      })
    },
    //选择地区
    bindRegionChange: function (e) {
      this.setData({
        region: e.detail.value
      })
    },
    // 选择品类
    bindPickerChange: function(e){
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
    // 查看详细 +this.data.data[e.target.data.set]
    showOrder: function(e){
      // console.log(e.target);
      // wx.navigateTo({
      //   url: 'showOrder/showOrder'
      // })
      var isflag = this.data.isflag;
      this.setData({
        isflag: !isflag
      })
    },
    // 开通订单买卖
    open: function(){
      // wx.navigateTo({
      //   url: 'dredge/dredge',
      // })
      var isflag = this.data.isflag;
      this.setData({
        isflag: !isflag
      })
    }
  })
  