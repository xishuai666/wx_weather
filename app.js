App({
  onLaunch: function(){
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
    getUserInfo: function(){
      var that = this;
      if(this.globalData.userInfo){
        typeof cf == 'function' && cb(this.globalData.userInfo)
      }else{
        wx.login({
          success: function(res){
            that.globalData.userInfo = res.userInfo
            typeof cb == 'function' && cb(that.globalData.userInfo)
          }
        })
      }
    }
})