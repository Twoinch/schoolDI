const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    time: '',
  },
  toRules(){
    wx.showToast({
      title: '暂无内容',
      icon: 'success',
      duration: 2000
    })
  },
  onLoad(){
    this.setData({
      time:util.formatTime(new Date()),
      starAddress: app.globalData.bluraddress,
      eddAddress: app.globalData.destination,
    })
  }
  
})