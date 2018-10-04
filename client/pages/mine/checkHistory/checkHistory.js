var app = getApp()
var iutil = require('../../../utils/util');
var openid = wx.getStorageSync('openid');

Page({
  data: {
    history: [],
    startX: 0, //开始坐标
    startY: 0
  },
  onLoad: function () {
    var that = this;
      wx.request({
      // url: iutil.APP_HOST + `my/findhis?user_oid=obZBJ5MOW3un4wG4xwCnXb9EDJHk`,
      url: iutil.APP_HOST + `my/findhis?user_oid=${openid}`,
        method: 'get',
        success: function (res) {
          console.log(res)          
          that.setData({
            history: res.data.freeBusinessesList.reverse(),
          })
          console.log(that.data.history)
        }
      })

    // content:history,
    isTouchMove: true //默认全隐藏删除

    that.setData({
      history: that.data.history
    })
    // console.log(this.data.history);
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.history.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      history: this.data.history
    })
    // console.log(this.data.history);
  },
  //滑动事件处理
  touchmove: function (e) {
    // console.log(e);
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.startX, //开始X坐标
      startY = that.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
          X: touchMoveX,
          Y: touchMoveY
        });
    that.data.history.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      history: that.data.history
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  del: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    // console.log(this.data.history)
    // this.data.history = this.data.history.splice(e.currentTarget.dataset.index, 1)
    // this.setData({
    //   history: this.data.history
    // })

    wx.request({
      url: iutil.APP_HOST + `my/hisdelete?user_oid=${openid}&fb_id=${that.data.history[index].fb_id}`,
      method: "POST",
      success: function (res) {
        console.log(res);
        that.onLoad();
      }
    })    
  }
})