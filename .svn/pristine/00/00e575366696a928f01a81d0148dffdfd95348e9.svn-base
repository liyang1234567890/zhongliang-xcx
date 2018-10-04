// pages/rich/rich.js
Page({
  data: {
    objectRich: [{ name: "李建国", place: "黑龙江哈尔滨宾县", time: "2018.1.1" }, { name: "宋美艳", place: "黑龙江哈尔滨方正县", time: "2018.1.4" }, { name: "宋雨航", place: "黑龙江哈尔滨通河县", time: "2018.1.10" }, { name: "陈国庆", place: "黑龙江哈尔滨木兰县", time: "2018.1.7" }, { name: "张洪博", place: "黑龙江哈尔滨巴彦县", time: "2018.1.3" }, { name: "刘柏桐", place: "黑龙江哈尔滨五常县", time: "2018.1.3" }, { name: "张晓旭", place: "黑龙江哈尔滨延寿县", time: "2018.1.3" }, { name: "陈奕霖", place: "黑龙江哈尔滨宾县", time: "2018.1.3" }, { name: "冯思鹏", place: "黑龙江哈尔滨方正县", time: "2018.1.3"},],
    navbar: ['致富光荣榜', '我要致富'],
    currentTab: 0  ,
    // myrich
    myrich:{
      richRuleShow: false,
      textDisabled: true
    },
    

    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['黑龙江省', '哈尔滨市','通河县'],
    customItem: '全部'
  },
  // 弹出框的显示隐藏
  hideRichRule() {
    var richRuleShow = true;
    var textDisabled = false;
    var myrich = {
      richRuleShow,
      textDisabled
    };
    this.setData({
      myrich
    });
  },
  showRichRule(){
    var richRuleShow = false;
    var textDisabled = true;
    var myrich = {
      richRuleShow,
      textDisabled
    };
    this.setData({
      myrich
    });
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  }
})