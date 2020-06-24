// pages/songPlayer/index.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songYouLike: [{
      "type": "netease",
      "link": "http://music.163.com/#/song?id=449818741",
      "songid": 449818741,
      "title": "光年之外",
      "author": "G.E.M.邓紫棋",
      "lrc": "[00:00.000] 作曲 : G.E.M.邓紫棋\n[00:01.000] 作词 : G.E.M.邓紫棋\n[00:05.117] 编曲： Lupo Groinig\n[00:08.726]\n[00:12.512] 感受停在我发端的指尖\n[00:16.573] 如何瞬间冻结时间\n[00:23.365] 记住望着我坚定的双眼\n[00:27.308] 也许已经没有明天\n[00:32.993]\n[00:33.597] 面对浩瀚的星海\n[00:36.394] 我们微小得像尘埃\n[00:38.906] 漂浮在一片无奈\n[00:43.288]\n[00:44.684] 缘份让我们相遇乱世以外\n[00:50.126] 命运却要我们危难中相爱\n[00:55.544] 也许未来遥远在光年之外\n[01:00.989] 我愿守候未知里\n[01:03.643] 为你等待\n[01:04.657]\n[01:05.109] 我没想到\n[01:06.396] 为了你我能疯狂到\n[01:10.571] 山崩海啸\n[01:11.786] 没有你根本不想逃\n[01:15.411]\n[01:16.058] 我的大脑\n[01:17.327] 为了你已经疯狂到\n[01:21.477] 脉搏心跳\n[01:22.718] 没有你根本不重要\n[01:27.289]\n[01:28.891] 一双围在我胸口的臂弯\n[01:32.768] 足够抵挡 天旋地转\n[01:39.600] 一种执迷不放手的倔强\n[01:43.655] 足以点燃 所有希望\n[01:49.561]\n[01:50.029] 宇宙磅礡而冷漠\n[01:52.707] 我们的爱微小却闪烁\n[01:55.211] 颠簸却如此忘我\n[02:00.241]\n[02:00.943] 缘份让我们相遇乱世以外\n[02:06.422] 命运却要我们危难中相爱\n[02:11.867] 也许未来遥远在光年之外\n[02:17.382] 我愿守候未知里\n[02:19.991] 为你等待\n[02:21.044]\n[02:21.492] 我没想到\n[02:22.766] 为了你我能疯狂到\n[02:26.921] 山崩海啸\n[02:28.180] 没有你根本不想逃\n[02:31.915]\n[02:32.428] 我的大脑\n[02:33.668] 为了你已经疯狂到\n[02:37.788] 脉搏心跳\n[02:39.124] 没有你根本不重要\n[02:43.023]\n[02:44.121] 也许航道以外\n[02:49.628] 是醒不来的梦\n[02:56.440] 乱世以外\n[03:00.256] 是纯粹的相拥\n[03:04.872]\n[03:05.035] 我没想到\n[03:06.538] 为了你我能疯狂到\n[03:10.532] 山崩海啸\n[03:11.871] 没有你根本不想逃\n[03:15.841]\n[03:16.155] 我的大脑\n[03:17.343] 为了你已经疯狂到\n[03:21.483] 脉搏心跳\n[03:22.687] 没有你根本不重要\n[03:26.232]\n[03:26.944] 相遇乱世以外\n[03:32.344] 危难中相爱\n[03:37.796] 相遇乱世以外\n[03:43.303] 危难中相爱\n[03:48.756] 我没想到\n[03:50.737]\n[03:54.371] 监制： Lupo Groinig\n",
      "url": "http://music.163.com/song/media/outer/url?id=449818741.mp3",
      "pic": "http://p1.music.126.net/fkqFqMaEt0CzxYS-0NpCog==/18587244069235039.jpg?param=300x300"
    },
    {
      "type": "netease",
      "link": "http://music.163.com/#/song?id=1405283464",
      "songid": 449818742,
      "title": "句号",
      "author": "G.E.M.邓紫棋",
      "lrc": "[00:00.000] 作曲 : G.E.M. 邓紫棋\n[00:01.000] 作词 : G.E.M. 邓紫棋\n[00:03.52]编曲：G.E.M.邓紫棋 / T-Ma 马敬恒\n[00:06.31]可惜我们终于来到\n[00:10.18]一个句号\n[00:13.16]窗外不愿飞的蜂鸟\n[00:16.58]也在哀悼\n[00:19.67]城市再也不会听到\n[00:23.44]我们争吵\n[00:26.42]你会不会少了一点烦恼\n[00:33.03]回到十二年前\n[00:34.72]回忆就在眼前\n[00:36.69]你带着帽子而我样子\n[00:38.70]带着腼腆\n[00:39.65]不过第一次的见面\n[00:41.59]你说你有先见\n[00:43.11]我的先天被训练过\n[00:45.03]我能有片天\n[00:46.37]我当时天真寡见鲜闻\n[00:49.50]不像成年人有能力辨认\n[00:52.53]不是为了赚了有钱分\n[00:54.83]我为我的前程\n[00:56.51]希望我写的歌里面\n[00:58.41]有更好的和弦声\n[00:59.87]时针滴滴答\n[01:03.06]你还记得吗\n[01:06.36]说句心里话\n[01:09.73]你还怀念吗\n[01:13.10]第一次发唱片\n[01:14.73]就一马当先\n[01:16.40]从此在大场面\n[01:17.86]我不再站旁边\n[01:19.86]我是真的感谢\n[01:21.20]佩服你的眼界\n[01:22.94]怎么想到\n[01:23.90]和你是带着刺痛地完结\n[01:27.18]你看着一朵花慢慢萌芽\n[01:30.31]我却看着你意气慢慢风发\n[01:33.12]欲望聚沙成塔\n[01:34.80]价值慢慢分岔\n[01:36.25]太多失望\n[01:37.04]让我对你的信任慢慢崩塌\n[01:39.73]可惜我们终于来到\n[01:43.48]一个句号\n[01:46.35]窗外不愿飞的蜂鸟\n[01:50.17]也在哀悼\n[01:52.98]城市再也不会听到\n[01:56.75]我们争吵\n[01:59.66]你会不会少了一点烦恼\n[02:06.40]时针滴滴答\n[02:09.71]你还记得吗\n[02:13.03]说句心里话\n[02:16.40]你还怀念吗\n[02:19.05]你说我是个商品\n[02:20.76]没有你我就不可以\n[02:22.43]这些扭曲的真理\n[02:24.06]差点毁掉我的自信\n[02:25.80]如今的我已觉醒\n[02:27.37]如今我不再哭泣\n[02:29.11]再不怕坚持自己\n[02:30.62]做你没做对的决定\n[02:32.53]你知道吗\n[02:33.65]这一辈子除了我的爸爸\n[02:37.04]你曾是我最信任的男人吧\n[02:39.70]但空白的娃娃\n[02:41.21]总会慢慢长大\n[02:42.84]抱歉我没法\n[02:43.91]永远当你听话的傻瓜\n[02:46.38]可惜我们终于来到\n[02:50.09]一个句号\n[02:53.00]窗外不愿飞的蜂鸟\n[02:56.93]也在哀悼\n[02:59.82]城市再也不会听到\n[03:03.53]我们争吵\n[03:06.46]你会不会少了一点烦恼\n[03:10.11]我们终于来到\n[03:12.07]一个句号\n[03:13.07]\n[03:15.12]多少年里多少遍你\n[03:16.92]\n[03:18.78]多少错却没多少歉意\n[03:20.16]\n[03:22.06]但过去了就不再介意\n[03:23.06]\n[03:23.82]把珍贵的放心里\n[03:25.11]把痛的伤的全都忘记\n[03:26.78]\n[03:28.75]我青春的全部回忆\n[03:30.20]\n[03:31.67]那爱的恨的全都是你\n[03:33.66]\n[03:35.79]希望你偶尔也会想起\n[03:37.14]就让我真心真意\n[03:38.43]把歌唱完重新开始\n[03:40.12]时针滴滴答\n[03:43.09]你还记得吗\n[03:46.29]说句心里话\n[03:49.95]你还怀念吗\n[03:53.75]制作人：G.E.M.邓紫棋 / T-Ma 马敬恒\n[03:53.95]和音：G.E.M.邓紫棋\n[03:54.75]混音：Richard Furch\n[03:54.95]母带：Randy Merrill @ Sterling Sound\n",
      "url": "http://music.163.com/song/media/outer/url?id=1405283464.mp3",
      "pic": "http://p1.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=300x300"
    },
    {
      "type": "netease",
      "link": "http://music.163.com/#/song?id=233931",
      "songid": 449818743,
      "title": "泡沫",
      "author": "G.E.M.邓紫棋",
      "lrc": "[00:00.00]作曲 : G.E.M.邓紫棋\n[00:00.00]作词 : G.E.M.邓紫棋\n[00:00.79]阳光下的泡沫 是彩色的\n[00:08.29]就像被骗的我 是幸福的\n[00:15.37]追究什么对错 你的谎言\n[00:22.32]基于你还爱我\n[00:28.32]美丽的泡沫 虽然一刹花火\n[00:35.66]你所有承诺 虽然都太脆弱\n[00:42.67]但爱像泡沫 如果能够看破\n[00:49.67]有什么难过\n[00:57.78]早该知道泡沫 一触就破\n[01:04.76]就像已伤的心 不胜折磨\n[01:11.89]也不是谁的错 谎言再多\n[01:18.86]基于你还爱我\n[01:25.11]美丽的泡沫 虽然一刹花火\n[01:32.00]你所有承诺 虽然都太脆弱\n[01:39.16]爱本是泡沫 如果能够看破\n[01:46.24]有什么难过\n[01:53.37]再美的花朵 盛开过就凋落\n[02:00.39]再亮眼的星 一闪过就坠落\n[02:07.39]爱本是泡沫 如果能够看破\n[02:14.37]有什么难过\n[02:21.58]为什么难过 有什么难过\n[02:35.65]为什么难过\n[02:46.23]全都是泡沫 只一刹的花火\n[02:53.23]你所有承诺 全部都太脆弱\n[03:00.34]而你的轮廓 怪我没有看破\n[03:07.34]才如此难过\n[03:14.47]相爱的把握 要如何再搜索\n[03:21.50]相拥着寂寞 难道就不寂寞\n[03:28.71]爱本是泡沫 怪我没有看破\n[03:35.65]才如此难过\n[03:43.73]在雨下的泡沫 一触就破\n[03:50.70]当初炽热的心 早已沉没\n[03:57.73]说什么你爱我 如果骗我\n[04:04.76]我宁愿你沉默\n",
      "url": "http://music.163.com/song/media/outer/url?id=233931.mp3",
      "pic": "http://p1.music.126.net/3XEICRFzQPrHPUMD0xm1Jw==/109951163069323980.jpg?param=300x300"
    },
    {
      "type": "kuwo",
      "link": "http://www.kuwo.cn/yinyue/6202213",
      "songid": "6202213",
      "title": "简单爱(Live)",
      "author": "陈奕迅",
      "lrc": null,
      "url": "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_6202213&response=res&type=convert_url&",
      "pic": "http://img2.kuwo.cn/star/starheads/120/c/abc627ab76017e94499b0bd7ea0a340_0.jpg"
    },
    {
      "type": "kuwo",
      "link": "http://www.kuwo.cn/yinyue/22802040",
      "songid": "22802040",
      "title": "遥远的她(Live)",
      "author": "陈奕迅",
      "lrc": null,
      "url": "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_22802040&response=res&type=convert_url&",
      "pic": "http://img4.kuwo.cn/star/starheads/120/c/abc627ab76017e94499b0bd7ea0a340_0.jpg"
    },
    {
      "type": "kuwo",
      "link": "http://www.kuwo.cn/yinyue/6202207",
      "songid": "6202207",
      "title": "淘汰(Live)",
      "author": "陈奕迅",
      "lrc": null,
      "url": "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_6202207&response=res&type=convert_url&",
      "pic": "http://img1.kuwo.cn/star/starheads/120/c/abc627ab76017e94499b0bd7ea0a340_0.jpg"
    },
    {
      "type": "kuwo",
      "link": "http://www.kuwo.cn/yinyue/2203376",
      "songid": "2203376",
      "title": "梦想天空分外蓝",
      "author": "陈奕迅",
      "lrc": null,
      "url": "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_2203376&response=res&type=convert_url&",
      "pic": "http://img2.kuwo.cn/star/starheads/120/c/abc627ab76017e94499b0bd7ea0a340_0.jpg"
    },
    {
      "type": "kuwo",
      "link": "http://www.kuwo.cn/yinyue/93168388",
      "songid": "93168388",
      "title": "Fight as ONE",
      "author": "陈奕迅",
      "lrc": null,
      "url": "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_93168388&response=res&type=convert_url&",
      "pic": "http://img1.kuwo.cn/star/starheads/120/c/abc627ab76017e94499b0bd7ea0a340_0.jpg"
    },
    {
      "type": "kuwo",
      "link": "http://www.kuwo.cn/yinyue/22799109",
      "songid": "22799109",
      "title": "好久不见 (Live)",
      "author": "陈奕迅",
      "lrc": null,
      "url": "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_22799109&response=res&type=convert_url&",
      "pic": "http://img3.kuwo.cn/star/starheads/120/c/abc627ab76017e94499b0bd7ea0a340_0.jpg"
    },
    {
      "type": "kuwo",
      "link": "http://www.kuwo.cn/yinyue/14130987",
      "songid": "14130987",
      "title": "几许风雨",
      "author": "陈奕迅",
      "lrc": null,
      "url": "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_14130987&response=res&type=convert_url&",
      "pic": "http://img4.kuwo.cn/star/starheads/120/c/abc627ab76017e94499b0bd7ea0a340_0.jpg"
    },
    {
      "type": "kuwo",
      "link": "http://www.kuwo.cn/yinyue/143435",
      "songid": "143435",
      "title": "今天等我来 + 跟我走好吗(Live)",
      "author": "陈奕迅",
      "lrc": null,
      "url": "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_143435&response=res&type=convert_url&",
      "pic": "http://img4.kuwo.cn/star/starheads/120/c/abc627ab76017e94499b0bd7ea0a340_0.jpg"
    }],
    songItem: {},
    songControlImage: {
      src: "./images/play.png", 
      isPlaying: false
    },
    isLike: './images/heart.png'
  },

  // musicControl 音乐播放控制
  musicControl(e){
    let _this = this;
    if (_this.data.songControlImage.isPlaying) {
      _this.setData({
        songControlImage: {
          src: "./images/play.png",
          isPlaying: false
        }
      });
      app.globalData.isPlaying = false;
      app.globalData.audio.pause();
    } else {
      _this.musicList = _this.selectComponent("#musicList");
      _this.musicList.pushSongMessage(_this.data.songItem);
      app.globalData.song = _this.data.songItem;
      app.globalData.audio.src = _this.data.songItem.url;
      _this.setData({
        songControlImage: {
          src: "./images/stop.png",
          isPlaying: true
        }
      });
      app.globalData.isPlaying = true;
      app.globalData.audio.play();
    }
  },

  // switchsong
  switchsong(e){
    let _this = this;
    let index = e.currentTarget.dataset.index;
    _this.setData({
      songItem: _this.data.songYouLike[index]
    });
    wx.setNavigationBarTitle({
      title: _this.data.songItem.title+"  ·  "+_this.data.songItem.author
    });
    // 回到顶部
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },

  // musicListShowAble
  musicListShowAble(){
    this.musicList = this.selectComponent("#musicList");
    this.musicList._closeListTap();
  },

  // tapToSearch
  tapToSearch(){
    wx.navigateTo({
      url: '../search/index',
    })
  },

  // clickToDownload
  clickToDownload(){
    let _this = this;
    wx.downloadFile({
      url: _this.data.songItem.url,
      success: function(res){
        console.log(res.tempFilePath);
        wx.showToast({
          title: "文件存储到"+res.tempFilePath,
        })
      }
    })
  },

  // isLikeHandle
  isLikeHandle(){
    let _this = this;
    if (_this.data.isLike === "./images/heart.png") {
      _this.setData({
        isLike: './images/red-heart.png'
      })
    } else {
      _this.setData({
        isLike: './images/heart.png'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    let src = "";
    app.globalData.audio.onEnded(function(){
      _this.setData({
        songControlImage: {
          src: "./images/play.png",
          isPlaying: false
        }
      });
      app.globalData.isPlaying = false;
    })
    _this.getOpenerEventChannel().on('acceptDataFromOpenerPage', function(data) {
      _this.setData({
        songItem: {
          ...data
        },
      })
      console.log(_this.data.songItem)
      wx.setNavigationBarTitle({
        title: data.title+"  ·  "+data.author
      });
      if (app.globalData.song.songid === _this.data.songItem.songid) {
        src = app.globalData.isPlaying ? "./images/stop.png" :"./images/play.png";
        _this.setData({
          songControlImage: {
            isPlaying: app.globalData.isPlaying,
            src: src
          }
        })
      } else {
        src = "./images/play.png";
        _this.setData({
          songControlImage: {
            isPlaying: false,
            src: src
          }
        })
      }
    });
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