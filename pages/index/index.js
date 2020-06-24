const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    songRecommend: [],
    paddingBottom: '0rpx'
  },

  // 请求数据
  getSongRecommend(){
    let _this = this;
    wx.request({
      url: 'http://rap2.taobao.org:38080/app/mock/258717/getRecommendSongs',
      success(res){
        _this.setData({
          songRecommend: res.data.data,
        })
      }
    })
  },

  // 歌曲推荐点击事件
  songRecommendClick: function(e){
    let _this = this;
    let element = {};
    for (let i = 0; i < _this.data.songRecommend.length; i++) {
      if (_this.data.songRecommend[i].songid === e.currentTarget.dataset.songId) {
        element = _this.data.songRecommend[i];
      }
    }
    wx.navigateTo({
      url: '../songPlayer/index',
      success(res){
        res.eventChannel.emit('acceptDataFromOpenerPage', {...element})
      }
    })
  },

  // tapToSearch
  tapToSearch(){
    wx.navigateTo({
      url: '../search/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSongRecommend();
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
    if (Object.keys(app.globalData.song).length !== 0) {
      this.setData({
        paddingBottom: '80rpx'
      })
    }
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