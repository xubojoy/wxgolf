const app = getApp()

const API_URL = 'http://api.golfd.cn/holeInOneUserPoints/year,2016/sort'

Page({
  // data:{
  //   // text:"这是一个页面"
  //   itemsArray: [],
  //   loading: true
  // },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

 wx.request({
  url: API_URL,
  data: {
    'count':'100',
    'pageNo':'1',
    'pageSize':20
  },
  header:{
      "Content-Type":"application/json"
  },
  success: function(res) {
     var data = res.data;
  }
});


     //调用应用实例的方法获取全局数据
    // app.fetchApi(API_URL, (err, data) => {
      //更新数据
      // console.log(data.items)
      // this.setData({itemsArray: data.items, loading: false })
    // })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})