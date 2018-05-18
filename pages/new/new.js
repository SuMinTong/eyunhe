
// var util = require('../../utils/util')
// var wxApi = require('../../utils/wxApi')
// var wxRequest = require('../../utils/wxRequest')

import config from '../../utils/config'
import util from '../../utils/util'
import wxApi from '../../utils/wxApi'
import wxRequest from '../../utils/wxRequest'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: ""
  },

  bindSearch(){
    var url = config.getOpenidUrl;
    var params = {
      appid: "wx4dfc6658d4d4b24a",
      secret: "f94439ef89015c1a8cbcdb9fc253a949",
      js_code: '061xWgmx05s4jj18IIox01i8mx0xWgmu',
      grant_type: "authorization_code"
    }

    console.log(wxRequest.getRequest(url, params))
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
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