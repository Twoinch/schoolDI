var util = require('../../utils/util.js');
const app = getApp()
Page({
  data: {
  
  },
  
  /*wx.redirectTo({
    url:  "/pages/orderService/orderService",
  }),*/
  

  onShow: function() {
    this.setData({
      address: app.globalData.bluraddress,
    })
  },
  onReady: function () {

  },
  onLoad:function(){
    setTimeout(() => {
      wx.redirectTo({
        url:  "/pages/orderService/orderService",
      })
    }, 8000);
  },

  toCancel(){
    wx.redirectTo({
      url: "/pages/cancel/cancel"
    })
  },

  backIndex(){
    wx.redirectTo({
      url: "/pages/index/index"
    })
  }
  

})