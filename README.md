
1.utils:封装的函数
  1.1 api.js  网络请求接口
      使用方法：
        1.在对对应的页面js中引入api.js文件
          var api = require('../../utils/api')
        2.
          api.get('接口名（不包含baseURL的值）',{
              参数1："参数1",
              参数1："参数1"
          }).then(res=>{
            成功

          }).catch(e=>{
            失败
          })
  1.2 config.js   各种配置信息
  1.3 wxApi.js     分装部分微信api
        使用方法
          1.在对对应的页面js中引入wxApi.js文件
            var api = require('../../utils/wxApi')
          2.
            var wxLogin = wxApi.wxLogin()
            wxLogin().then(res => {
                console.log('1.成功了')
                console.log(res.code)
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
                console.log('4.成功了')
                console.log("43行++++++", res)
                //5.获取用户信息
                var wxGetUserInfo = wxApi.wxGetUserInfo()
                return wxGetUserInfo()
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

              


