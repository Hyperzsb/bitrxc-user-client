import { request } from "../../request/index.js";
const app = getApp();
// pages/room/roomDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    this.roomID = options.roomID
    let res = await request({
      url: app.globalData.server + '/room/'+this.roomID,
      header: getApp().globalData.APIHeader,
      method:"GET",
    })
    //1:在控制台打印一下返回的res.data数据
    let items = res.data.data.roomInfo;
    console.log(res.data)
    if(items.gallery===null||items.gallery===undefined){
      items.gallery=[
        {
          image:"/pages/room/img/123.jpg",
          url:"",
        },
        {
          image:"/icons/Contact.png",
          url:"",
        },
      ]
    }
    if(items.description===null){
      items.description="暂无描述"
    }
    this.setData({
      room:items
    })
  
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

  },
  tofunction: function (e) {
    wx.navigateTo({
      url: './room1/room1?roomID='+this.roomID,
    })
  }
})