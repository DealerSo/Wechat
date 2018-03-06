// pages/area/area.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    var that = this;
    wx.request({
      url: 'http://127.0.0.1/region/listArea',
      method: 'GET',
      data: {},
      success : function(resp){
        var areaList = resp.data.listArea;
          if(areaList == null){
            var toastText = '获取数据失败' + resp.data.errMsg;
            wx.showToast({
              title: toastText,
              icon: '',
              duration: 2000 //停留2秒
            });
          }else{
            that.setData({
              areaList: areaList
            });
          }
      }
    })
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
  
  },

  addArea : function(){
    wx.navigateTo({
      url: '../operation/operation',
    })
  }
})