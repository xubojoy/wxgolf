//app.js
App({
   // ========== 应用程序全局方法 ==========
  fetchApi (url, callback) {
    wx.request({
      url,
      data: {
        'User-Agent':'golf_ios,9.3.5;iPhone,320*568;golf,3.1.1;f4356ae32c083f58c3118823a1a8ff2f4fe862fc;b7199e994de6f4c9b6b122a058929726b046cd3990db8bd23dd8865069659663'
        },
      header: { 
        'Content-Type': 'application/json',
       },
      success (res) {
        callback(null, res.data)
      },
      fail (e) {
        callback(e)
      }
    })
  },
  onLaunch: function () {
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
})