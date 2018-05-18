//index.js
// var util = require('../../utils/util')
// var wxApi = require('../../utils/wxApi')
// var wxRequest = require('../../utils/wxRequest')
// import config from '../../utils/config'


import config from '../../utils/config'
import util from '../../utils/util'
import wxApi from '../../utils/wxApi'
import wxRequest from '../../utils/wxRequest'
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },

 onLoad: function () {

    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: function(res) {
        
      },
      fail: function(res) {},
      complete: function (res) { console.log(res)},
    })
   wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    //1.获取code
    var wxLogin = wxApi.wxLogin()
    wxLogin().then(res => {
      console.log('1.成功了')
      console.log(res)
      var url = config.getOpenidUrl;
      var params = {
        appid: "wx4dfc6658d4d4b24a",
        secret: "f94439ef89015c1a8cbcdb9fc253a949",
        js_code: res.code,
        grant_type: "authorization_code"
      }
      //2.获取openid
      return wxRequest.getRequest(url, params)
    }).
      then(res => {
        console.log('3.成功了')
        console.log("36行++++++",res)
        //4.获取系统信息
        var wxGetSystemInfo = wxApi.wxGetSystemInfo()
        return wxGetSystemInfo()
      }).
      then(res => {
        console.log('5.成功了')
        console.log("50行++++++", res)
        that.setData({
          userInfo: res.userInfo
        })
      })
      .finally(function (res) {
        wx.hideToast()
      })
  },

})