// components/search-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    songs: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSongs(arr){
      this.setData({
        songs: arr
      })
    },
    tapClickHandle(e){
      let songItem = this.data.songs[e.currentTarget.dataset.index];
      console.log(songItem)
      wx.navigateTo({
        url: '../../pages/songPlayer/index',
        success(res){
          res.eventChannel.emit('acceptDataFromOpenerPage', {...songItem})
        }
      })
    }
  }
})
