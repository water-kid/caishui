// pages/marriage/marriage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circle: [1, 2, 3, 4, 5, 6, 7],
    marriageStatus: ["未婚", "已婚"],
    marriageIndex:0,
    accessStatus:["购买","xxx"],
    accessIndex:0,
    roomStatus:["1套","2套"],
    roomIndex:0,
    typeStatus:["商品房","精装房"],
    typeIndex:0,
    info:{
      windowWidth:0,
      isStart:false,
      offset:0
    },
    activeTab:0,
    allInfo:{
      
    }
  },
  handlerStart(e){
    this.touchDot=0;//触摸时的原点
    this.time=0; //时间记录
    this.interval=null; //计时器
    
    this.touchDot=e.touches[0].pageX
    this.interval=setInterval(function(){
      this.time++
    },100)
  },
  handlerMove(e){
    console.log(this.touchDot)
    this.touchMove=e.touches[0].pageX;
    var info=this.data.info;
    // 向右运动
    if(this.touchMove-this.touchDot>=40 && this.time<10){
      if(info.isStart==false){
        
        info.offset=info.offset-info.windowWidth;
        console.log(info)
        info.isStart=true;
        this.data.activeTab+=1
        this.setData({
          info:info,
          activeTab:this.data.activeTab
        })
        
        console.log("向右运动")
      }
    }
// 向左运动
    if(this.touchDot-this.touchMove>=40 && this.time<10){

      if (info.isStart == false) {
        if(this.data.activeTab==0){
          return;
        }
        info.offset = info.offset + info.windowWidth;
        console.log(info)
        info.isStart = true;
        this.data.activeTab -= 1
        this.setData({
          info: info,
          activeTab: this.data.activeTab
        })
        console.log("向左运动")

      }
    }
  },
  bindPickerChange(e){
    console.log(e.detail.value)
    this.setData({
      marriageIndex:e.detail.value
    })
  },
  bindAccessPickerChange(e){
    this.setData({
      accessIndex:e.detail.value
    })
  },
  bindRoomPickerChange(e){
    this.setData({
      roomIndex:e.detail.value
    })
  },
  bindTypePickerChange(e){
    this.setData({
      typeIndex:e.detail.value
    })
  }
  ,
  handlerEnd(){
    this.data.info.isStart=false;
    this.setData({
      info:this.data.info
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try{
      var res=wx.getSystemInfoSync();
      this.data.info.windowWidth=res.windowWidth;
      this.setData({
        info:this.data.info
      })
    }
    catch(e){}
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