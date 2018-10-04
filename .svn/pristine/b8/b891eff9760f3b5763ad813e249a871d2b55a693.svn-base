// pages/mine/pubInfor/pubInfor.js
var util = require('../../../utils/util.js');

Page({
// <navigator url= 'pubInfor/pubInfor' > 发布的信息 < /navigator>
  /**
   * 页面的初始数据
   */
  data: {
    bol:1,
    businessesList: [],
    filterList: [],
    blocks: [{
      name: "玉米",
      price: '1400',
      brand: '黑土地',
      address: '黑龙江省哈尔滨市...'
    },{
      name: '红薯',
      price: '200',
      brand: '红薯',
      address: '河北省唐山市...'
    },{
      name:'苹果',
      price:'155',
      brand: '富士',
      address: '山东省临沂市...'
    },{
      name: '苹果',
      price: '155',
      brand: '富士',
      address:'黑龙江省哈尔滨市...'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 显示加载中
    wx.showLoading({
      title: '加载中....'
    }); 
    var that = this;

    // 加载数据
    wx.request({
      url: util.APP_HOST + 'freebusiness/findfreebus',
      data: {},
      success(res) {
        console.log(res.data);
        var filterList = res.data.freeBusinessesList.concat();
        filterList.forEach(function(item) {
          if(item.update_time){
            item.update_time = item.update_time.split(" ")[0]
          }else if(item.create_time){
            item.create_time = item.create_time.split(" ")[0]
          }
        });
        console.log(filterList);
        that.setData({
          businessesList: res.data.freeBusinessesList,
          filterList
        });
        
        // 隐藏Loading图标
        wx.hideLoading();
        
      },
    });




    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    // var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据 
    // var date = new Date();
    // var hour = date.getHours();
    // var minute = date.getMinutes();
    // var hourMinute = hour + ':' + minute;
    // this.setData({
    //   time: time,
    //   hourMinute: hourMinute
    // });
    // console.log(this.data.hourMinute);
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