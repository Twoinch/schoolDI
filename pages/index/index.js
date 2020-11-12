import util from '../../utils/index'
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key:'HRVBZ-SWFW6-PWTSS-EYKCI-GQNXE-HGBGW'
});
const app = getApp()
Page({
    data: {
        currentTab: 1,
        currentCost: 0,
        cart: '电驴',
        navScrollLeft: 0,
        duration: 1000,
        interval: 5000,
        isLoading: true,
        color:"#cccccc",
        callCart: true,
        destination: '',
        bluraddress : '',
        index: '',
    },
    onLoad: function(options) {

    },
    onShow(){
        this.setData({
            address:app.globalData.bluraddress,
            destination:app.globalData.destination,
            currentTab:app.globalData.id,
        })
    },
   
    toCast(e){
      const destination =this.data.destination
      if(destination==''){
        wx.showToast({
            title: '目的地不能为空',
            icon: 'fail',
            mask: true,
            duration: 1000
          })
      }else{

        let {endLatitude,endLongitude} = app.globalData
        qqmapsdk.calculateDistance({
            mode: 'driving',
            to:[ {
              latitude: endLatitude,
              longitude:endLongitude
          }],
          success: (res)=> {
            // console.log(res.result.elements[0].distance)
            
            var play1 = 2
            var play2 = 2
            var play3 = 2
            this.setData({
                play1:play1,
                play2:play2,
                play3:play3,
            })
          },
         
          });
        this.setData({
        
            callCart: false
        })
      }
        
       
    },
  toWait(e){
   
    wx.reLaunch({
        url:  "/pages/wait/wait",
    }),
    wx.setTopBarText({
        text: '等待应答'
        })
  },
    
    switchCart(e){
        const id = e.currentTarget.dataset.index;
        this.setData({
          index:id,
          
        })
       
    },
    switchTab(event){
        var cur = event.detail.current;
        var singleNavWidth =55;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 1) * singleNavWidth
        });
    },
    showUser(){
    // 如果全局未存手机号进入登录页
    if(app.globalData.userInfo && app.globalData.userInfo.phone){
        return
    }else{
        wx.navigateTo({
        url:  "/pages/login/login",
        })
    }
    },
    onChange(e){
        const currentCost = e.target.dataset.index;
        this.setData({
            currentCost
        })
      
    }
})