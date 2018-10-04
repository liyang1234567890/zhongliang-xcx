var iutil = require('../../../utils/util.js'); 

Page({
    data:{
        freeBusinessesList:[],
        array: [],
        indexCorn: 0,
        arrayBusiness: ['买','卖'],
        indexBusiness: 0,
        showModal: false,
        keyWord:'',
        currentTab: 0,
        multiIndex: [0, 0, 0],
        region: ['', '', ''],
        customItem: '全部',
        multiArray: [[],[]],
        currentUnit: 0,
        unit: ['全部', '吨', '公斤', '升','斤']

    },
    changeUnit: function(e){
      this.setData({
        currentUnit: e.currentTarget.dataset.unit
      })
        // console.log(e.currentTarget.dataset.unit);
    },
    toBuy: function () {
      wx.navigateTo({
        url: '../../free/buy/buy',
      })
    },
    tosellers: function () {
      wx.navigateTo({
        url: '../../free/sellers/sellers',
      })
    },
    bindMultiPickerChange: function(e){
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
    bindMultiPickerColumnChange: function(e){
      // console.log(e.detail.column);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      if (e.detail.column==0){
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
    bindRegionChange: function(e){
      var that=this;
      var region = e.detail.value[2];
      console.log(e.detail.value)
      wx.request({
        url: iutil.APP_HOST + '/freebusiness/findfreebus?region='+region,
        success:function(res){
          that.setData({
            freeBusinessesList: res.data.freeBusinessesList
          })
        }
      })
    },
    listenerCornPickerSelected: function (e) {
        this.setData({
            indexCorn: e.detail.value
        });
    },
    listenerBusinessPickerSelected: function (e) {
      var bustype = e.detail.value;
      var bustypes = parseInt(bustype)+1
      console.log(bustypes)
      var that = this;
      wx.request({
        url: iutil.APP_HOST + '/freebusiness/findfreebus?type=' + bustypes,
        success: function (res) {
          that.setData({
            freeBusinessesList: res.data.freeBusinessesList
          })
          console.log(that.data.freeBusinessesList)
        }
      })
      
        
        
    },
    showDialogBtn: function () {
         this.setData({
              showModal: true
         })
    },
    hideDialogBtn:function(){
         this.setData({
              showModal: false
          })
    },
    hideModal: function () {
         this.setData({
              showModal: false
         });
    },
    onLoad: function (options) {
      var keyWord = wx.getStorageSync('keyWord');
      this.setData({ keyWord: keyWord });
      var that = this;
      wx.request({
        url: iutil.APP_HOST + '/freebusiness/findbykey?keyWord='+keyWord,
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
      })
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
          for (var i in arrays){
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
})