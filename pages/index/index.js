// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: '/images/head/wxlogo1.png',
    region: ['上海市','上海市','浦东新区'],
    locationId: '101020600',
    heWeatherKey: '4ea47567973f4708a658b287b09d94d7',
    now: {
      temp: '',
      icon: '999',
      humidity: '',
      pressure:'',
      vis: '',
      windDir: '',
      windScale: '',
      windSpeed: '',
    }
  },
  // 地域选取
  changeRegion: function(e){
    this.setData({
      region:e.detail.value
    });
    this.getLocation();
  },
  // 获取天气数据
  getLocation: function(){
    var that = this;
    // 通过地域获取locationId
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup',
      data: {        
        key: that.data.heWeatherKey,
        location: that.data.region[2],
        adm: that.data.region[1]
      },
      success: function(res){
        that.getWeather(res.data.location[0].id)
      }
    })
  },
  getWeather: function(locationId){
    var that = this;
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?',
      data: {
        key: that.data.heWeatherKey,
        location: locationId
      },
      success: function(response){
        that.setData({
          now: response.data.now
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation();
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