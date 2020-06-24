// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotSearch: ["爱，存在","BLACKPINK","周杰伦新歌","旧梦一场","你莫走","少年","创造营2020","夏天的风","点歌的人","火箭少女101","孟婆的碗"],
    canclebtnshow: 'display:none;',
    style: 'display:none;',
    isValueExist: false,
    value: ''
  },

  focusHandle(){
    this.setData({
      canclebtnshow: '',
      style: ''
    })
  },
  blurHandle(){
    if (this.data.isValueExist) {
      this.setData({
        canclebtnshow: 'display:none;',
        style: ''
      })
    } else {
      this.setData({
        canclebtnshow: 'display:none;',
        style: 'display:none;'
      })
    }
  },
  inputHandle(e){
    if (e.detail.value) {
      this.setData({
        isValueExist: true
      })
    } else {
      this.setData({
        isValueExist: false
      })
    }
  },
  confirmHandle(e){
    let _this = this;
    if (!e.detail.value) {
      _this.setData({
        canclebtnshow: 'display:none;',
        style: 'display:none;',
        isValueExist: false
      })
      _this.musicList = _this.selectComponent("#searchList");
      _this.musicList.getSongs([]);
    } else {
      _this.setData({
        isValueExist: true
      })
      // 发请求
      let songs = [];
      _this.getData('http://rap2.taobao.org:38080/app/mock/258717/searchSongs', {key: "tlp"}).then(function(res){
        songs = res.data;
        _this.musicList = _this.selectComponent("#searchList");
        _this.musicList.getSongs(songs);
      });
    }
  },
  tapHandle(e){
    let _this = this;
    _this.setData({
      value: e.currentTarget.dataset.keyinfor,
      isValueExist: true
    })
    _this.focusHandle();
    // 发请求
    let songs = [];
    _this.getData('http://rap2.taobao.org:38080/app/mock/258717/searchSongs', {key: "tlp"}).then(function(res){
      songs = res.data;
      _this.musicList = _this.selectComponent("#searchList");
      _this.musicList.getSongs(songs);
    });
  },
  tapCancleHandle(){
    let _this = this;
    _this.setData({
      canclebtnshow: 'display:none;',
      style: 'display:none;',
      value: '',
      isValueExist: false
    })
  },
  getData(url, param){
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: 'POST',
        data: param,
        success (res) {
          resolve(res.data)
        },
        fail (err) {
          reject(err)
        }
      })
    })
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