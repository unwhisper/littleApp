//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    news:{}
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    var that =this
    wx.request({
      //上线接口地址要是https测试可以使用http接口方式
      url: 'https://www.apiopen.top/satinGodApi?type=4&page=9',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({ news: res.data.data });
        console.log(res.data.data);
      }

    })
  }
})
