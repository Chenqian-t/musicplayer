// components/music-list/index.js
const app = getApp();
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
    playMode: [{
      mode: "列表循环",
      imgsrc: "./images/listcircle.png"
    },{
      mode: "单曲循环",
      imgsrc: "./images/singlecircle.png"
    },{
      mode: "随机播放",
      imgsrc: "./images/random.png"
    }],
    playModeIndex: 0,
    song: {},
    isShow: 'display:none;',
    showAble: false
  },

  pageLifetimes: {
    show: function(){
      // 拿globalData数据
      this.setData({
        song: app.globalData.song
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changePlayMode(){
      let _this = this;
      if (_this.data.playModeIndex === 2) {
        _this.setData({
          playModeIndex: 0
        })
      } else {
        _this.setData({
          playModeIndex: _this.data.playModeIndex+1
        })
      }
    },
    pushSongMessage(obj){
      let _this = this;
      _this.setData({
        song: obj
      })
    },
    closeListTap(){
      let _this = this;
      _this.setData({
        isShow: 'display:none;',
        showAble: false
      })
    },
    _closeListTap(){
      let _this = this;
      if (_this.data.showAble) {
        let _this = this;
        _this.setData({
          isShow: 'display:none;',
          showAble: false
        })
      } else {
        _this.setData({
          isShow: '',
          showAble: true
        })
      }
    }
  }
})
