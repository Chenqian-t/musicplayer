// components/musicPlayer/index.js
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
    song: {},
    showable: '-80rpx',
    animation: '',
    src: './images/stop.png'
  },

  lifetimes: {
    attached: function(){
      let _this = this;
      app.globalData.audio.onEnded(function(){
        _this.setData({
          animation: '',
          src: './images/play.png'
        });
        app.globalData.isPlaying = false;
      })
    }
  },

  pageLifetimes: {
    show: function(){
      if (Object.keys(app.globalData.song).length !== 0) {
        this.setData({
          song: app.globalData.song,
          showable: '0'
        })
      }
      if (app.globalData.isPlaying) {
        this.setData({
          src: './images/stop.png',
          animation: 'animation: move 5s linear infinite;'
        })
      } else {
        if (Object.keys(app.globalData.song).length !== 0) {
          this.setData({
            src: './images/play.png',
            animation: 'animation: move 5s linear infinite paused;'
          })
        } else {
          this.setData({
            src: './images/play.png',
            animation: ''
          })
        }
      }
    }
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    tapbtn(){
      let _this = this;
      if (app.globalData.isPlaying) {
        _this.setData({
          src: './images/play.png',
          animation: 'animation: move 5s linear infinite paused;'
        })
        app.globalData.isPlaying = false;
        app.globalData.audio.pause();
      } else {
        _this.setData({
          src: './images/stop.png',
          animation: 'animation: move 5s linear infinite;'
        })
        app.globalData.isPlaying = true;
        app.globalData.audio.play();
      }
    },
    musicListShowAble(){
      let _this = this;
      _this.musicList = _this.selectComponent("#musicList");
      _this.musicList._closeListTap();
    }
  }
})
