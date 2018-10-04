Page({
  data: {
    choice:'',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    clauses:[
      {"stipulate": "1.规定了:扶持农民专业合作社和龙头企业发展。"},
      {"stipulate": "2.规定了:加快发展农民专业合作社，开展示范社建设行动。"},
      { "stipulate": "3.规定了:加强合作社人员培训，各级财政给予经费支持。" },
      { "stipulate": "4.规定了:加快农村基础设施建设。" },
      { "stipulate": "5.规定了:农民工技能培训。" },
      { "stipulate": "6.规定了:有条件的地方可将失去工作的农民工纳入相关就业政策支持范围。" },
      { "stipulate": "7.规定了:落实农民工返乡创业扶持政策，在贷款发放、税费减免、工商登记、信息咨询等方面提供                               支持。" },
      {"stipulate": "8.规定了:种子分配"}
    ]
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
  }
})