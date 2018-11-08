// pages/marriage/marriage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circle: [1, 2, 3, 4, 5, 6, 7],
    circleTxt: ["房屋持有人登记","婚姻状况","户口簿信息","购房发票","购房合同","授权与申明","拆迁补偿协议"],
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
      userName:"1",
      idCardNumber:"1",
      idCardPic1:"",
      idCardPic2:"",
      isMarriage:false,
      registeredUserName:"",
      registeredIdCardNumber:"11",
      registeredPic:"",
      accessWay:"购买",
      bookRoomNumber:"1套",
      roomNumber:"1",
      bill:"",
      roomArea:"1",
      roomTotal:"1",
      roomType:"商品房",
      roomAddress:"1",
      roomContractPic:"",
      taxPic:""
    }
  },
  clickNext(){
    if (this.isComplete(this.data.activeTab) == 0) {
      return;
    }
    this.data.activeTab++;
    wx.setNavigationBarTitle({
      title: this.data.circleTxt[this.data.activeTab],
    })

    this.data.info.offset = - this.data.info.windowWidth * this.data.activeTab;
    this.setData({
      info: this.data.info
    })
    this.setData({
      activeTab:this.data.activeTab
    })
  },
  handlerUserName(e){
    this.data.allInfo.userName=e.detail.value;
    this.setData({
      allInfo:this.data.allInfo
    })
  },
  handlerIdCardNumber(e){
    this.data.allInfo.idCardNumber = e.detail.value;
    this.setData({
      allInfo: this.data.allInfo
    })
  },
  handlerIdCardPic1(e){
    var that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        that.data.allInfo.idCardPic1=tempFilePaths;
        that.setData({
          allInfo:that.data.allInfo
        })
      }
    })
  },
  handlerIdCardPic2(e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        that.data.allInfo.idCardPic2 = tempFilePaths;
        that.setData({
          allInfo: that.data.allInfo
        })
      }
    })
  },
  bindPickerChange(e) {//是否婚配
    // console.log(e.detail.value)
    if(e.detail.value==0){
      this.data.allInfo.isMarriage=false;
    }else{
      this.data.allInfo.isMarriage=true;
    }
    this.setData({
      marriageIndex: e.detail.value,
      allInfo:this.data.allInfo
    })
  },
  handlerRegisteredUserName(e) {
    this.data.allInfo.registeredUserName = e.detail.value;
    this.setData({
      allInfo: this.data.allInfo
    })
  },
  handlerRegisteredIdCardNumber(e) {
    this.data.allInfo.registeredIdCardNumber = e.detail.value;
    this.setData({
      allInfo: this.data.allInfo
    })
  },
  handlerRegisteredPic(e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        that.data.allInfo.registeredPic = tempFilePaths;
        that.setData({
          allInfo: that.data.allInfo
        })
      }
    })
  },
  bindAccessPickerChange(e) {//获取方式
    if (e.detail.value == 0) {
      this.data.allInfo.accessWay = "购买";
    } else if(e.detail.value==1) {
      this.data.allInfo.accessWay = "贷款";
    }
    this.setData({
      accessIndex: e.detail.value,
      allInfo:this.data.allInfo
    })
  },
  bindRoomPickerChange(e) {//已购房套数
    if (e.detail.value == 0) {
      this.data.allInfo.bookRoomNumber = "1套";
    } else if (e.detail.value == 1) {
      this.data.allInfo.bookRoomNumber = "2套";
    }
    this.setData({
      roomIndex: e.detail.value,
      allInfo:this.data.allInfo
    })
  },
  handlerRoomNumber(e){
    this.data.allInfo.roomNumber = e.detail.value;
    this.setData({
      allInfo: this.data.allInfo
    })
  },
  handlerBill(e){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        that.data.allInfo.bill = tempFilePaths;
        that.setData({
          allInfo: that.data.allInfo
        })
      }
    })
  },
  handlerRoomArea(e) {
    this.data.allInfo.roomArea = e.detail.value;
    this.setData({
      allInfo: this.data.allInfo
    })
  },
  handlerRoomTotal(e) {
    // console.log
    this.data.allInfo.roomTotal = e.detail.value;
    this.setData({
      allInfo: this.data.allInfo
    })
  },
  handlerRoomAddress(e) {
    this.data.allInfo.roomAddress = e.detail.value;
    this.setData({
      allInfo: this.data.allInfo
    })
  },
  handlerRoomContractPic(e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        that.data.allInfo.roomContractPic = tempFilePaths;
        that.setData({
          allInfo: that.data.allInfo
        })
      }
    })
  },
  handlerTaxPic(e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        that.data.allInfo.taxPic = tempFilePaths;
        that.setData({
          allInfo: that.data.allInfo
        })
      }
    })
  },
  isComplete(page){
    // console.log(page)
    var allInfo=this.data.allInfo;
    switch(page){
      case 0:
        if(allInfo.userName=="" || allInfo.idCardNumber=="" || allInfo.idCardPic1=="" || allInfo.idCardPic2==""){
          wx.showToast({
            title: '信息未完成',
          })
          return 0;
        }
        return 1;
      break;
      case 1:
        return 1;
      break;
      case 2:
      if(allInfo.registeredUserName=="" || allInfo.registeredIdCardNumber=="" || allInfo.registeredPic==""){
        wx.showToast({
          title: '信息未完成',
        })
        return 0;
      }
      break;
      case 3:
      if(allInfo.accessWay=="" || allInfo.bookRoomNumber=="" || allInfo.roomNumber=="" || allInfo.tip==""){
        wx.showToast({
          title: '信息未完成',
        })
        return 0;
      }
      return 1;
      break;

      case 4:
      if(allInfo.roomArea=="" || allInfo.roomTotal=="" || allInfo.roomAddress=="" || allInfo.roomContractPic==""){
        wx.showToast({
          title: '信息未完成',
        })
        return 0;
      }
      break;
      case 5:
      break;
      case 6:
      if(allInfo.taxPic==""){
        wx.showToast({
          title: '信息未完成',
        })
        return 0;
      }
      break;
    }
  },
  handlerClickCircle(event){
    console.log(this.data.allInfo)
    var that=this;
      if(event.target.dataset.index>this.data.activeTab){
        // console.log(this.isComplete(this.data.activeTab))
        if (this.isComplete(this.data.activeTab)==0){
            return;
        }
        var idx=event.target.dataset.index
        // console.log(this.isComplete(0))
       var flag=1;

        function iteration(page){
          console.log(page)
          if(that.isComplete(page)==0){
            console.log("333");
            flag=0;
            // return 0;
          }
          page--;
          console.log(page)
          if(page>=0){
             iteration(page)
            // console.log()
          }
        }
        // console.log(iteration(idx))
         if (flag==0){
           console.log("hh")
          return;
        }
        // iteration(idx)
      }

    // console.log(event.target.dataset.index)


    this.setData({
      activeTab:event.target.dataset.index
    })
    wx.setNavigationBarTitle({
      title: this.data.circleTxt[this.data.activeTab],
    })

    this.data.info.offset =  - this.data.info.windowWidth*this.data.activeTab;
    this.setData({
      info:this.data.info
    })
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
    // console.log(this.touchDot)
    this.touchMove=e.touches[0].pageX;
    var info=this.data.info;
    // 向右运动
    if(this.touchMove-this.touchDot>=40 && this.time<10){
      // console.log(this.data.activeTab)
     
      if(info.isStart==false){
        if (this.isComplete(this.data.activeTab) == 0) {

          return;
        }
        if (this.data.activeTab == 6) {
          return;
        }
        info.offset=info.offset-info.windowWidth;
        // console.log(info)
        info.isStart=true;
        
        this.data.activeTab+=1
        this.setData({
          info:info,
          activeTab:this.data.activeTab
        })
        
        wx.setNavigationBarTitle({
          title: this.data.circleTxt[this.data.activeTab],
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

        wx.setNavigationBarTitle({
          title: this.data.circleTxt[this.data.activeTab],
        })
        console.log("向左运动")

      }
    }
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