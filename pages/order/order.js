
Page({

  data: {
    reasons:[
    {
      value:0,
     name: '行程有变，暂时不需要用车',
      checked:false
    }
  ],
  show: false,
  
  },
  
  bindReasonChange(e){
    let reasons = this.data.reasons;
    let strVal = e.detail.value;
    for(var i = 0, lenI = reasons.length; i < lenI; ++i){
      reasons[i].checked = false;
      for(var j = 0, lenJ = strVal.length; j < lenJ; ++j){
        if(reasons[i].value==strVal[j]){
          reasons[i].checked =true;
          break;
        }
      }
    }
    this.setData({
      reasons
    })
  },
  
  moreReasons(e){
    wx.showLoading({ 
      title: '加载中', 
      icon: 'loading', 
      duration: 500,
      success: (res)=>{
        
      }
      });
    
  setTimeout(()=>{
    const moreReason = [
      {
        value:1,
        name: '骑手未在规定的时间到达站点',
        checked:false
      },{
        value:2,
        name: '骑手找不到上车地点',
        checked:false
      },
      {
        value:3,
        name: '其他',
        checked:false
      }
      
    ];
    
    const reasons = this.data.reasons;
    const total = reasons.concat(moreReason)
    this.setData({
      show:true,
        reasons: total
    })
    
  },500)
      
  },
})